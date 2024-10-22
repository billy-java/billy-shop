import { T_Produkt_Cart } from './T_Produkt_Cart';

export type T_Bestellung = {
  bestellungs_Nr: number;
  kunde_Nr: string;
  produkt_List: T_Produkt_Cart[];
  preis: number;
  stand: string;
  bestellungs_Datum: string;
};

