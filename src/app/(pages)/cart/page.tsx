// src\app\(pages)\cart\page.tsx

'use client';

import { RootState } from '@/app/lib/redux/redux';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shopping_icon from '@/app/lib/icons/shopping.svg';
import Image, { StaticImageData } from 'next/image';
import {
  deleteItem,
  updateAnzahl,
  updateBestellung,
} from '@/app/lib/redux/Cart_Slice';
import {
  frauenArtikeln,
  maennerArtikeln,
  kinderArtikeln,
} from '@/app/lib/arrays/alle_Produkte';
import { I_Produkt } from '@/app/lib/type/I_Produkt';
import Link from 'next/link';
import Popup from '@/app/components/Popup';
import { loadStripe } from '@stripe/stripe-js';
import { format } from 'date-fns';
import { T_Produkt_Cart } from '@/app/lib/type/T_Produkt_Cart';

const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey
  ? loadStripe(stripePublishableKey)
  : null;

const Cart = () => {
  const dispatch = useDispatch();
  const { produkt_List, preis } = useSelector((state: RootState) => state.cart);
  const [nachricht, setNachricht] = useState<string>('');

  const saveCartToLocalStorage = () => {
    localStorage.setItem(
      'cart',
      JSON.stringify({ list: produkt_List, price: preis })
    );
  };

  useEffect(() => {
    // Charger le panier depuis le localStorage à l'initialisation du composant
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const { list, price } = JSON.parse(savedCart);
      if (list && list.length > 0) {
        dispatch(
          updateBestellung({
            bestellungs_Nr: 1,
            kunde_Nr: '1',
            produkt_List: list,
            preis: price,
            stand: 'lauft',
            bestellungs_Datum: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
          })
        );
      }
    }
  }, [dispatch]);

  useEffect(() => {
    saveCartToLocalStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [produkt_List, preis]);

  const handleRemoveItem = (produkt: T_Produkt_Cart) => {
    dispatch(deleteItem(produkt.cart_ID));
    setNachricht(`Der Artikel (${produkt.produktName}) wurde gelöscht.`);
  };

  const getBild = (
    produkt_ID: string,
    kategorie: string
  ): StaticImageData | string => {
    const alleProdukte: I_Produkt[] = [
      ...frauenArtikeln,
      ...maennerArtikeln,
      ...kinderArtikeln,
    ];
    const item = alleProdukte.find(
      (el) => el.id === Number(produkt_ID) && el.kategorie === kategorie
    );
    return item?.bild || shopping_icon; // Renvoie `shopping_icon` en cas d'absence de l'image
  };

  function resetMsg() {
    setNachricht('');
  }

  const handleCheckout = async (totalPreis: number) => {
    const amountInCents = Math.round(totalPreis * 100);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              price_data: {
                currency: 'eur',
                product_data: {
                  name: 'Produktbeispiel',
                },
                unit_amount: amountInCents,
              },
              quantity: 1,
            },
          ],
        }),
      });

      const session = await response.json();
      if (stripePromise && session.id) {
        const stripe = await stripePromise;
        stripe?.redirectToCheckout({ sessionId: session.id });
      }
    } catch (error) {
      console.error(
        'Erreur lors de la création de la session de paiement:',
        error
      );
    }
  };

  const handleChange = (
   produkt: T_Produkt_Cart,
    inputID1?: string,
    inputID2?: string
  ) => {
    // Vérifiez si au moins un des IDs d'input est défini
    if (!inputID1 && !inputID2) {
      console.error("Aucun ID d'input fourni.");
      return; // Sortir si aucun ID n'est fourni
    }

    // Récupérer l'input en fonction de l'ID défini
    const input = document.getElementById(
      inputID1 || inputID2!
    ) as HTMLInputElement; // Utilisez l'opérateur non-null pour s'assurer que l'ID n'est pas undefined

    if (input) {
      // Incrémentation ou décrémentation en fonction des IDs
      if (inputID1) {
        input.stepUp(); // Incrémente la valeur
      }
      if (inputID2) {
        if (parseInt(input.value) > 0) {
          input.stepDown(); 
          if (input.value === "0") {
            handleRemoveItem(produkt)
          }
        }
      }

      // Obtenez l'élément à mettre à jour
      const item = produkt_List.find(
        (el) =>
          el.produkt_ID === produkt.produkt_ID && el.produkt_Kategorie === produkt.produkt_Kategorie
      );

      // Vérifiez si l'élément a été trouvé
      if (item) {
        const value = Number(input.value);
        if (value >= 0) {
          // Vérifiez que la valeur est >= 0
          const itemToAdd: T_Produkt_Cart = {
            ...item,
            anzahl: value,
          };
          dispatch(updateAnzahl(itemToAdd));
        } else {
          console.error('La quantité ne peut pas être inférieure à 0');
        }
      } else {
        console.error('Produit non trouvé');
        // Vous pouvez gérer l'erreur ici, par exemple en affichant un message d'erreur.
      }
    } else {
      console.error('Input non trouvé avec les IDs spécifiés');
    }
  };

  function clean() {
    produkt_List.forEach((element) => {
      handleRemoveItem(element);
    });
    localStorage.clear();
    setNachricht(`Ihr Warenkorb wurde geleert.`);
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {nachricht !== '' && (
        <Popup message={nachricht} setNachricht={resetMsg} farbe="bg-red-600" />
      )}
      <h1 className="text-3xl font-bold text-gray-300 mb-10 text-center">
        Ihr Warenkorb
      </h1>
      {produkt_List.length === 0 ? (
        <p className="text-xl text-gray-100 text-center">
          Ihr Warenkorb ist leer.
        </p>
      ) : (
        <>
          <div className="border border-indigo-700 bg-black flex flex-col  rounded-lg shadow-md p-6">
            <div className="overflow-x-auto mx-auto ">
              <table className="hidden md:block lg:block min-w-full divide-y divide-indigo-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                      Produit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                      Prix
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                      Quantité
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-700">
                  {produkt_List.map((item) => (
                    <tr key={item.produkt_ID}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 ">
                        <Link
                          className="flex items-center"
                          href={`/produkte/${
                            item.produkt_Kategorie.toLocaleLowerCase() +
                            String(item.produkt_ID)
                          }`}>
                          <Image
                            src={getBild(
                              item.produkt_ID,
                              item.produkt_Kategorie
                            )}
                            width={40}
                            height={40}
                            alt="Produkt"
                            className="mr-4"
                          />
                          <span className="text-gray-400">
                            {item.produktName}
                          </span>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {item.produktPreis}€
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        <div className="relative inline-flex items-center">
                          <input
                            id={`input-${item.produkt_ID}`} // Assurez-vous que l'ID est unique
                            className="bg-black w-20 text-white text-center" // Ajout de `text-white` pour un contraste avec `bg-black`
                            type="number"
                            defaultValue={item.anzahl}
                          />

                          <button
                            onClick={() =>
                              handleChange(
                                item,
                                undefined,
                                `input-${item.produkt_ID}`
                              )
                            }
                            className="absolute left-0 px-2 h-full text-gray-600 hover:bg-gray-200 rounded-l-lg">
                            −
                          </button>

                          <button
                            onClick={() =>
                              handleChange(
                                item,
                                `input-${item.produkt_ID}`,
                                undefined
                              )
                            }
                            className="absolute right-0 px-2 h-full text-gray-600 hover:bg-gray-200 rounded-r-lg">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleRemoveItem(item)}>
                          Löschen
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Affichage en liste sur les petits écrans */}
            <div className="md:hidden">
              {produkt_List.map((item) => (
                <div
                  key={item.produkt_ID}
                  className="border-b border-indigo-700 pb-4 mb-4 flex items-center justify-between">
                  <div className="flex items-center mb-2">
                    <Link
                      href={`/produkte/${
                        item.produkt_Kategorie.toLocaleLowerCase() +
                        String(item.produkt_ID)
                      }`}>
                      <Image
                        src={getBild(item.produkt_ID, item.produkt_Kategorie)}
                        width={40}
                        height={40}
                        alt="Produkt"
                        className="mr-4"
                      />
                    </Link>
                  </div>
                  <div className="text-gray-400 flex flex-col flex-1">
                    <span>{item.produktName}</span>
                    <span>Prix: {item.produktPreis}€</span>
                    <span>Quantité: {item.anzahl}</span>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800 mt-2"
                    onClick={() => handleRemoveItem(item)}>
                    Löschen
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col">
              <h2 className="text-xl font-semibold text-white text-center">
                {/* Centrer le total */}
                Kosten: {preis}€
              </h2>
              <div className=" mx-auto space-x-4">
                <button
                  onClick={() => handleCheckout(preis)}
                  className="px-10 py-2 mt-6 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Bestellen
                </button>
                <button
                  onClick={() => clean()}
                  className="px-5 py-1 mx-auto mt-6 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                  Warenkorb leeren
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
