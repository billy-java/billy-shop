export type T_Produkt_Cart = {
  cart_ID: string;
  produkt_ID: string;
  produktPreis: number;
  produktName: string;
  produkt_Kategorie: string;
  anzahl: number;
};

export function generateID(existingProdukts: T_Produkt_Cart[]): string {
  let newID: string;
  let isUnique: boolean;

  do {
    newID = 'C-' + Math.random().toString(36).slice(2, 11);
    isUnique = !existingProdukts?.some((produkt) => produkt.cart_ID === newID);
  } while (!isUnique);

  return newID;
}
