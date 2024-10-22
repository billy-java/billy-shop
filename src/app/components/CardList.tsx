'use client';

import React from 'react';
import shopping_icon from '@/app/lib/icons/shopping.svg';
import Link from 'next/link';
import Image from 'next/image';
import { I_Produkt } from '../lib/type/I_Produkt';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../lib/redux/Cart_Slice';
import { generateID } from '../lib/type/T_Produkt_Cart';
import { RootState } from '../lib/redux/redux';

interface produkt_Hook {
  titel: string;
  list: I_Produkt[];
}

const CardList = ({ titel, list }: produkt_Hook) => {
  const dispatch = useDispatch();
  const produktList = useSelector((state: RootState) => state.cart);

  
  const handleAddToCart = (produkt: I_Produkt) => {
    const itemToAdd = {
      cart_ID:generateID(produktList.produkt_List),
      produkt_ID: produkt.id.toString(),
      produktPreis: produkt.neuer_preis
        ? produkt.neuer_preis
        : produkt.alter_preis,
      produktName: produkt.name,
      produkt_Kategorie: produkt.kategorie,
      anzahl: 1,
    };

    dispatch(addItem(itemToAdd));
  };

  return (
    <div className="my-20">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">{titel}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {list.map((produkt, index) => {
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
                    <span className="text-orange-600">{produkt.groesse}</span>{' '}
                  </p>
                </div>

                {/* Div containing the price and button pushed to the bottom */}
                <div className="mt-auto pt-4">
                  <p>
                    <span className="text-red-400 text-lg line-through">
                      {produkt.alter_preis}€
                    </span>
                    <span className="text-indigo-600 text-2xl font-semibold ml-2">
                      {produkt.neuer_preis}€
                    </span>
                  </p>
                  <button
                    className="bg-white hover:bg-blue-300 border border-white hover:border-2 hover:border-black w-full rounded-sm py-2 flex text-[#8C1AF6] mt-3"
                    onClick={() => handleAddToCart(produkt)}>
                    <div className="mx-auto flex items-center">
                      <Image
                        src={shopping_icon}
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
      </div>
    </div>
  );
};

export default CardList;
