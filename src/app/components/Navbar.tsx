'use client';
import React, { useState } from 'react';
import close from '@/app/lib/icons/close.svg';
import bouton_phone from '@/app/lib/icons/bouton_phone.svg';
import Image from 'next/image';
import Link from 'next/link';
import { menus } from '@/app/lib/arrays/menus';
import { usePathname } from 'next/navigation';
import { RootState } from '../lib/redux/redux';
import { useSelector } from 'react-redux';
import shopping_icon from '@/app/lib/icons/shopping.svg';

const Navbar = () => {
  const [click, setClick] = useState<boolean>(false);
  const path = usePathname();
  const produktList = useSelector((state: RootState) => state.cart);

  const getUpdatedMenus = () => {
    return menus.map((el) => ({
      ...el,
      activ: el.url === path,
    }));
  };

  return (
    <>
      <nav className="shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link className="flex items-center space-x-2" href="/">
                  <Image
                    src={'/imgs/logos/logo.png'}
                    width={30}
                    height={30}
                    alt={'logo'}
                  />{' '}
                  <p className="text-lg">
                    {'Billy-'}
                    <span className="text-indigo-600">Shop</span>
                  </p>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gray-800 rounded-md py-1 flex items-center ">
                {getUpdatedMenus().map((el, index) => (
                  <Link
                    href={el.url}
                    key={index}
                    className={`${
                      el.activ
                        ? 'bg-gray-300 rounded-md mx-1 px-2 py-1 text-sm text-gray-800 cursor-pointer'
                        : 'bg-gray-900 rounded-md mx-1 px-2 py-1 hover:bg-gray-200 text-sm hover:text-gray-800 cursor-pointer'
                    }`}>
                    {el.titel === 'Cart' ? (
                      <div className="flex items-center space-x-2">
                        <Image
                          src={shopping_icon}
                          width={20}
                          height={20}
                          alt="Cart"
                        />{' '}
                        <span className="text-red-700 font-semibold text-lg">
                          {produktList?.produkt_List?.length}
                        </span>
                      </div>
                    ) : (
                      el.titel
                    )}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <Link
                onClick={() => setClick(false)}
                href="/cart"
                className={`${
                  getUpdatedMenus()[0].activ
                    ? 'bg-gray-300 rounded-md mx-1 px-2 py-1 text-sm text-gray-800 cursor-pointer'
                    : 'bg-gray-900 rounded-md mx-1 px-2 py-1 hover:bg-gray-200 text-sm hover:text-gray-800 cursor-pointer'
                }`}>
                <div className="flex items-center space-x-2">
                  <Image
                    src={shopping_icon}
                    width={20}
                    height={20}
                    alt="Cart"
                  />{' '}
                  <span className="text-red-700 font-semibold text-lg">
                    {produktList?.produkt_List?.length}
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setClick(!click)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200">
                <Image
                  src={click ? close : bouton_phone}
                  alt="Icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          {click && (
            <div className="md:hidden">
              <div className="border border-indigo-700 rounded-lg px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                {getUpdatedMenus()
                  .slice(1, getUpdatedMenus().length)
                  .map((el, index) => (
                    <Link
                      onClick={() => setClick(false)}
                      href={el.url}
                      key={index}
                      className={`${
                        el.activ
                          ? 'bg-gray-900 hover:bg-gray-200 hover:text-black rounded-md mx-1 px-2 py-1 text-sm text-white cursor-pointer'
                          : 'rounded-md mx-1 px-2 py-1 hover:bg-gray-200 text-sm hover:text-gray-800 cursor-pointer'
                      }`}>
                      {el.titel}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
