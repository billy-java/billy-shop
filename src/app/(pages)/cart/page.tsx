'use client';

import { RootState } from '@/app/lib/redux/redux';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shopping_icon from '@/app/lib/icons/shopping.svg';
import Image, { StaticImageData } from 'next/image';
import { deleteItem } from '@/app/lib/redux/Cart_Slice';
import {
  frauenArtikeln,
  maennerArtikeln,
  kinderArtikeln,
} from '@/app/lib/arrays/alle_Produkte';
import { I_Produkt } from '@/app/lib/type/I_Produkt';

const Cart = () => {
  const dispatch = useDispatch();
  const { produkt_List, preis } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  const getBild = (produkt_ID: string, kategorie:string): StaticImageData => {
    const alleProdukte: I_Produkt[] = [
      ...frauenArtikeln,
      ...maennerArtikeln,
      ...kinderArtikeln,
    ];
    const item = alleProdukte.find((el) => el.id === Number(produkt_ID) && el.kategorie === kategorie);

    return item ? item.bild : shopping_icon;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-400 mb-10 text-center">
        Ihr Warenkorb
      </h1>
      {produkt_List.length === 0 ? (
        <p className="text-xl text-gray-200 text-center">
          Ihr Warenkorb ist leer.
        </p>
      ) : (
        <>
          <div className="border border-indigo-700 bg-zinc-950 rounded-lg shadow-md p-6">
            <div className="overflow-x-auto">
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 flex items-center">
                        <Image
                          src={getBild(item.produkt_ID, item.produkt_Kategorie)}
                          width={40}
                          height={40}
                          alt="Produkt"
                          className="mr-4"
                        />
                        <span>{item.produktName}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {item.produktPreis}€
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        {item.anzahl}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleRemoveItem(item.produkt_ID)}>
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
                  className="border-b border-indigo-700 pb-4 mb-4">
                  <div className="flex items-center mb-2">
                    <Image
                      src={getBild(item.produkt_ID, item.produkt_Kategorie)}
                      width={40}
                      height={40}
                      alt="Produkt"
                      className="mr-4"
                    />
                    <span className="text-gray-400">{item.produktName}</span>
                  </div>
                  <div className="text-gray-400">
                    <span>Prix: {item.produktPreis}€</span>
                    <span className="ml-4">Quantité: {item.anzahl}</span>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800 mt-2"
                    onClick={() => handleRemoveItem(item.produkt_ID)}>
                    Löschen
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-semibold text-white text-center">
                {' '}
                {/* Centrer le total */}
                Kosten: {preis}€
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
