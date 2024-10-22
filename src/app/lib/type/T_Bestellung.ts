import { T_Produkt_Cart } from './T_Produkt_Cart';

export type T_Bestellung = {
  bestellungs_Nr: number;
  kunde_Nr: string;
  produkt_List: T_Produkt_Cart[];
  preis: number;
  stand: string;
  bestellungs_Datum: string;
};

export const totalPreis_rechnen = (bestellung: T_Bestellung) => {
  if (bestellung.produkt_List.length > 0) {
    let totalPreis: number = 0;
    bestellung.produkt_List.forEach((produkt_Cart) => {
      totalPreis = totalPreis + produkt_Cart.produktPreis * produkt_Cart.anzahl;
    });

    return totalPreis;
  }
};
