import { StaticImageData } from 'next/image';

export type I_Produkt = {
  id: number;
  artikelNr: string;
  name: string;
  beschreibung: string;
  kategorie: string;
  alter_preis: number;
  neuer_preis?: number;
  groesse: string;
  bestand: number;
  bild: StaticImageData;

  zusatzbilder?: StaticImageData[];
  marke?: string;
  gewicht?: number;
  abmessungen?: {
    laenge: number;
    breite: number;
  };
  farbe?: string;
  material?: string;
  bewertung?: number;
  schlagworte?: string[];
  ist_im_fokus?: boolean;
  fokus_dauer?: string;
  ist_neuheit?: boolean;
  neuheit_dauer?: string;
  hinzufuegedatum?: Date;
};

export function updateGroesse(
  produkt: I_Produkt,
  neue_groesse: string
): I_Produkt {
  produkt.groesse = neue_groesse;

  return produkt;
}




/* export function generateID(
  type: string,
  existingProdukts?: I_Produkt[]
): string {
  let newID: string;
  let isUnique: boolean;

  do {
    newID = type + Math.random().toString(36).slice(2, 11);
    isUnique = !existingProdukts?.some((produkt) => produkt.artikelNr === newID);
  } while (!isUnique);

  return newID;
}



export function generateSKU(kategorie: string): string {
  const timestamp = Date.now().toString();
  const kategoriePart = kategorie.substring(0, 3).toUpperCase();
  return `${kategoriePart}-${timestamp}`;
} */