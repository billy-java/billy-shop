'use client';

import footer_logo from '/public/imgs/logos/logo_big.png';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  bestseller_Produkte,
  neue_Produkte,
} from '../lib/arrays/home_Produkte';
import CardList from '../components/CardList';

// Exemples de données (à remplacer par de vraies données)
const categories = [
  {
    name: 'Frauen',
    image: '/imgs/artikeln/product_5.webp',
    link: '/frauen',
  },
  {
    name: 'Männer',
    image: '/imgs/artikeln/product_16.webp',
    link: '/maenner',
  },
  {
    name: 'Kinder',
    image: '/imgs/artikeln/product_32.webp',
    link: '/kinder',
  },
  {
    name: 'Alle Produkte',
    image: '/imgs/artikeln/product_8.webp',
    link: '/produkte',
  },
];

const Home = () => {
  return (
    <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8  mx-auto pb-20">
      {/* Section d'introduction */}
      <section
        className="bg-cover bg-center h-96 flex flex-col items-center justify-center bg-indigo-500"
        style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Willkommen in unserem Kleidershop
        </h1>
        <div className="flex items-center space-x-2 my-4">
          <Image
            src={footer_logo}
            layout="intrinsic"
            width={80}
            height={80}
            alt={'logo'}
            className="rounded-full"
          />
          <p className="text-4xl sm:text-5xl text-white">
            {'Billy-'}
            <span className="text-red-500">Shop</span>
          </p>
        </div>
      </section>

      {/* Section des catégories */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Unsere Kategorien
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {categories.map((category) => (
            <Link href={category.link} key={category.name}>
              <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="responsive"
                  width={300}
                  height={200}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section des produits en vedette */}
      <section className="py-10 ">
        <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 border-b mx-auto mt-10 pb-20 ">
          <CardList titel="Bestseller" list={bestseller_Produkte} />
          <CardList titel="Neue Artikeln" list={neue_Produkte} />
        </div>
      </section>
    </div>
  );
};
export default Home;
