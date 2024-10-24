'use client';

import React, { useEffect, useState } from 'react';
import shopping_icon from '@/app/lib/icons/shopping.svg';
import Link from 'next/link';
import Image from 'next/image';
import { I_Produkt } from '../lib/type/I_Produkt';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../lib/redux/Cart_Slice';
import { generateID } from '../lib/type/T_Produkt_Cart';
import { RootState } from '../lib/redux/redux';
import Popup from './Popup';

interface produkt_Hook {
  titel?: string;
  list: I_Produkt[];
  anzahl?: number; // Nouvelle propriété pour le nombre de cartes à afficher
}

const CardList = ({ titel, list, anzahl }: produkt_Hook) => {
  const dispatch = useDispatch();
  const currentBestellung = useSelector((state: RootState) => state.cart);
  const [nachricht, setNachricht] = useState<string>('');

  useEffect(() => {
    setNachricht(currentBestellung.message);
  }, [currentBestellung]);

  useEffect(() => {
    setNachricht('');
  }, []);

  const handleAddToCart = (produkt: I_Produkt) => {
    const itemToAdd = {
      cart_ID: generateID(currentBestellung.produkt_List),
      produkt_ID: produkt.id.toString(),
      produktPreis: produkt.neuer_preis
        ? produkt.neuer_preis
        : produkt.alter_preis,
      produktName: produkt.name,
      produkt_Kategorie: produkt.kategorie,
      anzahl: 1,
    };

    dispatch(addItem(itemToAdd));
    setNachricht(currentBestellung.message);
  };

  const kategorieURL = (): string => {
    const menus = [
      { titel: 'Frauen', url: '/frauen' },
      { titel: 'Maenner', url: '/maenner' },
      { titel: 'Kinder', url: '/kinder' },
    ];

    for (const element of menus) {
      if (element.titel === list[0].kategorie) {
        return element.url;
      }
    }

    return '/';
  };

  const displayCount = anzahl && anzahl < list.length ? anzahl : list.length; // Détermine le nombre de cartes à afficher

  return (
    <div className="my-20">
      {nachricht !== '' && (
        <Popup
          message={nachricht}
          setNachricht={() => setNachricht('')}
          farbe="bg-green-600"
        />
      )}
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">{titel}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.slice(0, displayCount).map((produkt, index) => {
          return (
            <div
              className="bg-zinc-900 pb-6 shadow-white shadow-md text-gray-400 flex flex-col h-full rounded-lg hover:shadow-blue-700 hover:shadow-lg"
              key={index}>
              <div className="w-[90%] mx-auto flex flex-col h-full">
                <Link
                  href={`/produkte/${
                    produkt.kategorie.toLocaleLowerCase() + String(produkt.id)
                  }`}>
                  <Image
                    className="mx-auto"
                    layout="responsive"
                    src={produkt.bild}
                    alt={produkt.name}
                    width={300}
                    height={300}
                  />
                  <h3 className="mt-4 text-lg font-medium text-gray-300">
                    {produkt.name}
                  </h3>
                </Link>
                <div className="">
                  <p className="mt-2">Artikelnummer: {produkt.artikelNr}</p>
                  <p>Kategorie: {produkt.kategorie}</p>
                  <p>
                    Grösse:{' '}
                    <span className="text-orange-600">{produkt.groesse}</span>
                  </p>
                </div>

                {/* Div containing the price and button pushed to the bottom */}
                <div className="mt-auto pt-4">
                  {produkt.neuer_preis ? (
                    <p>
                      <span className="text-red-400 text-lg line-through">
                        {produkt.alter_preis}€
                      </span>
                      <span className="text-indigo-600 text-2xl font-semibold ml-2">
                        {produkt.neuer_preis}€
                      </span>
                    </p>
                  ) : (
                    <span className="text-indigo-600 text-2xl font-semibold ml-2">
                      {produkt.alter_preis}€
                    </span>
                  )}
                  <button
                    className="bg-white hover:bg-blue-300 border border-white hover:border-2 hover:border-black w-full rounded-sm py-2 flex text-[#8C1AF6] mt-3"
                    onClick={() => handleAddToCart(produkt)}>
                    <div className="mx-auto flex items-center">
                      <Image
                        src={shopping_icon}
                        layout="responsive"
                        width={30}
                        height={30}
                        alt={'cart'}
                      />
                      <p className="text-xl pl-1">Add</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {anzahl &&
          anzahl < list.length && ( // Affiche le bouton "voir plus" si nécessaire
            <div className="bg-zinc-900 pb-6 shadow-white shadow-md text-gray-400 flex flex-col h-full rounded-lg hover:shadow-blue-700 hover:shadow-lg ">
              <Link href={kategorieURL()} className="my-auto ">
                <div className="w-[90%] mx-auto flex flex-col h-full items-center justify-center">
                  <h3 className="mt-4 text-2xl font-medium text-gray-300">
                    Mehr Artikeln...
                  </h3>
                </div>
              </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default CardList;
