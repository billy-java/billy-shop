import footer_logo from '/public/imgs/logos/logo_big.png';
import instagram_icon from '@/app/lib/icons/instagram_icon.png';
import whatsapp_icon from '@/app/lib/icons/whatsapp_icon.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <footer className="hidden md:block shadow  border-y border-y-indigo-700 ">
        <div className="flex flex-col max-w-7xl mx-auto text-center ">
          <div className="flex items-center justify-between pl-10 pr-24 py-8">
            <Link className="flex items-center space-x-2" href="/">
              <Image src={footer_logo} width={60} height={60} alt={'logo'} />{' '}
              <p className="text-4xl">
                {'Billy-'}
                <span className="text-indigo-600">Shop</span>
              </p>
            </Link>
            <ul className="text-left">
              <li className="font-semibold">Quick Pages</li>
              <li className="px-3 hover:bg-indigo-600 rounded-md">
                <Link href="/">Startseite</Link>
              </li>
              <li className="px-3 hover:bg-indigo-600 rounded-md">
                <Link href="/maenner">Männer</Link>
              </li>
              <li className="px-3 hover:bg-indigo-600 rounded-md">
                <Link href="/frauen">Frauen</Link>
              </li>
              <li className="px-3 hover:bg-indigo-600 rounded-md">
                <Link href="/kinder">Kinder</Link>
              </li>
              <li className="px-3 hover:bg-indigo-600 rounded-md">
                <Link href="/cart">Cart</Link>
              </li>
            </ul>
            <div className="bg-indigo-600 rounded-full px-2 py-1 flex items-center space-x-4">
              <Image src={instagram_icon} alt="instagram_icon" />

              <Image src={whatsapp_icon} alt="whatsapp_icon" />
            </div>
          </div>
        </div>
      </footer>

      <footer className="md:hidden text-sm  border-y border-y-indigo-700 ">
        <div className="flex flex-col text-center ">
          <Link className="mx-auto  flex items-center space-x-2 my-4" href="/">
            <Image src={footer_logo} width={30} height={30} alt={'logo'} />
            <p className="text-xl">
              {'Billy-'}
              <span className="text-indigo-600">Shop</span>
            </p>
          </Link>
          <ul className="mb-4">
            <li className="font-semibold">Quick Pages</li>
            <li className="mx-20 hover:bg-indigo-600 rounded-md">
              <Link href="/">Startseite</Link>
            </li>
            <li className="mx-20 hover:bg-indigo-600 rounded-md">
              <Link href="/maenner">Männer</Link>
            </li>
            <li className="mx-20 hover:bg-indigo-600 rounded-md">
              <Link href="/frauen">Frauen</Link>
            </li>
            <li className="mx-20 hover:bg-indigo-600 rounded-md">
              <Link href="/kinder">Kinder</Link>
            </li>
            <li className="mx-20 hover:bg-indigo-600 rounded-md">
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
          <div className="bg-indigo-600 w-24 mx-auto mb-4 py-1 rounded-full px-2 flex justify-between items-center space-x-4">
            <Image src={instagram_icon} alt="instagram_icon" />

            <Image src={whatsapp_icon} alt="whatsapp_icon" />
          </div>
        </div>
      </footer>

      <footer className="py-3">
        <p className="text-gray-400 text-sm text-center items-center mx-auto">
          Copyright @ 2024 - All Right Reserved.
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
