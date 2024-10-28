'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { addItem } from '@/app/lib/redux/Cart_Slice';
import { generateID, T_Produkt_Cart } from '@/app/lib/type/T_Produkt_Cart';
import { useParams } from 'next/navigation';
import {
  frauenArtikeln,
  kinderArtikeln,
  maennerArtikeln,
} from '@/app/lib/arrays/alle_Produkte';
import { RootState } from '@/app/lib/redux/redux';
import Popup from '@/app/components/Popup';

const DetailsProdukt = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentBestellung = useSelector((state: RootState) => state.cart);
  const [nachricht, setNachricht] = useState<string>('');

  const produktList = [
    ...frauenArtikeln,
    ...maennerArtikeln,
    ...kinderArtikeln,
  ];
  const produkt = produktList.find(
    (item) => item.kategorie.toLocaleLowerCase() + String(item.id) === id
  );

  if (!produkt) {
    return <p className="text-xl text-center">Keinen Produkt gefunden!</p>;
  }

  const handleAddToCart = () => {
    const neuItem: T_Produkt_Cart = {
      cart_ID: generateID(currentBestellung.produkt_List),
      produkt_ID: produkt.id.toString(),
      produktPreis: produkt.neuer_preis
        ? produkt.neuer_preis
        : produkt.alter_preis,
      produktName: produkt.name,
      produkt_Kategorie: produkt.kategorie,
      anzahl: 1,
    };
    dispatch(addItem(neuItem));

    setNachricht('Artikel (' + neuItem.produktName + ') hingefügt!');
  };

  function testons() {
    setNachricht('');
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {nachricht !== '' && (
        <Popup
          message={nachricht}
          setNachricht={testons}
          farbe="bg-green-600"
        />
      )}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={produkt.bild}
            alt={produkt.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-6">
          <h1 className="text-3xl font-bold text-gray-200">{produkt.name}</h1>
          <p className="mt-4 text-lg text-gray-400">{produkt.beschreibung}</p>
          <p className="mt-4 text-lg text-gray-400">
            Noch{' '}
            <span className="text-orange-500">{produkt.bestand + ' '}</span>
            Stücke
          </p>
          <div className="mt-4">
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
          </div>
          <button
            className="mt-6 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
            onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsProdukt;
