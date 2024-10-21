import React from 'react';
import shopping_icon from '@/app/lib/icons/shopping.svg';
import Link from 'next/link';
import Image from 'next/image';
import { I_Produkt } from '../lib/type/I_Produkt';

interface produkt_Hook {
  titel: string;
  list: I_Produkt[];
}
const CardList = ({ titel, list }: produkt_Hook) => {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">{titel}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-6">
        {list.map((product) => (
          <div
            key={product.id}
            className="shadow-md shadow-white hover:shadow-sky-500 bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/products/${product.id}`} className="flex">
              <Image
                className="mx-auto"
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
              />
            </Link>
            <div className="px-10 py-4 flex flex-col">
              <h3 className="text-lg font-medium text-gray-500">
                {product.name}
              </h3>
              <p className="mt-2 text-black">
                <span className="text-red-400 text-sm line-through">
                  {product.old_price + '€'}
                </span>
                {' - '}
                <span className="text-indigo-600 text-xl font-semibold">
                  {product.new_price + '€.'}
                </span>
              </p>
              <div className="mx-auto mt-6 py-1 px-20 bg-white  text-[#8C1AF6] shadow shadow-indigo-600 hover:bg-blue-300 rounded-md">
                <button className="flex items-center">
                  <Image
                    src={shopping_icon}
                    width={30}
                    height={30}
                    alt={'cart'}
                  />
                  <p className="text-xl pl-1">Add</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
