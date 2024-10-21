import { StaticImageData } from 'next/image';

export type I_Produkt = {
  id: number;
  name: string;
  kategorie: string;
  new_price: number;
  old_price: number;
  image: StaticImageData;
};
