import p3_img from '/public/imgs/artikeln/product_3.webp';
import p5_img from '/public/imgs/artikeln/product_5.webp';
import p6_img from '/public/imgs/artikeln/product_6.webp';
import p9_img from '/public/imgs/artikeln/product_9.webp';
import p17_img from '/public/imgs/artikeln/product_17.webp';
import p20_img from '/public/imgs/artikeln/product_20.webp';
import p21_img from '/public/imgs/artikeln/product_21.webp';
import p25_img from '/public/imgs/artikeln/product_25.webp';
import p27_img from '/public/imgs/artikeln/product_27.webp';
import p33_img from '/public/imgs/artikeln/product_33.webp';

import { I_Produkt } from '../type/I_Produkt';

export const bestseller_Produkte: I_Produkt[] = [
  {
    id: 3,
    artikelNr: 'FRAU-003',
    name: 'Gestreifte Bluse mit Flügelärmeln Gestreifte Bluse mit Flügelärmeln und Kragen Gestreifte Bluse mit Flügelärmeln und Kragen und Kragen',
    beschreibung:
      'Schick und komfortabel, diese Bluse ist ein Must-Have für jeden Kleiderschrank.',
    kategorie: 'Frauen',
    neuer_preis: 72.0,
    alter_preis: 110.5,
    groesse: 'S',
    bestand: 12,
    bild: p3_img,
  },
  {
    id: 5,
    artikelNr: 'FRAU-005',
    name: 'Gestreifte Bluse mit Flügelärmeln und Kragen',
    beschreibung:
      'Diese Bluse kombiniert klassische und moderne Elemente für einen zeitlosen Look.',
    kategorie: 'Frauen',
    neuer_preis: 80.0,
    alter_preis: 140.5,
    groesse: 'M',
    bestand: 8,
    bild: p5_img,
  },
  {
    id: 8,
    artikelNr: 'MANN-020',
    name: 'Herren Bomberjacke mit Reißverschluss in Grün - Slim Fit',
    beschreibung:
      'Hochwertige Materialien und ein modernes Design machen diese Jacke zum perfekten Begleiter.',
    kategorie: 'Maenner',
    neuer_preis: 88.0,
    alter_preis: 118.5,
    groesse: 'S',
    bestand: 35,
    bild: p20_img,
  },
  {
    id: 1,
    artikelNr: 'KIND-025',
    name: 'Jungen Kapuzenpullover in Orange mit Farbblockierung',
    beschreibung:
      'Ein bequemer Kapuzenpullover in leuchtendem Orange, ideal für kühle Tage.',
    kategorie: 'Kinder',
    neuer_preis: 70.0,
    alter_preis: 100.5,
    groesse: 'M',
    bestand: 50,
    bild: p25_img,
  },
  {
    id: 3,
    artikelNr: 'KIND-027',
    name: 'Jungen Kapuzenpullover in Orange mit Farbblockierung',
    beschreibung:
      'Hergestellt aus weichem, langlebigem Material für maximalen Komfort.',
    kategorie: 'Kinder',
    neuer_preis: 82.0,
    alter_preis: 110.5,
    groesse: 'S',
    bestand: 40,
    bild: p27_img,
  },
];

export const neue_Produkte: I_Produkt[] = [
  {
    id: 6,
    artikelNr: 'FRAU-006',
    name: 'Gestreifte Bluse mit Flügelärmeln und Kragen',
    beschreibung:
      'Diese Bluse bietet Komfort und Stil, perfekt für jede Gelegenheit.',
    kategorie: 'Frauen',
    neuer_preis: 92.0,
    alter_preis: 135.5,
    groesse: 'S',
    bestand: 30,
    bild: p6_img,
  },
  {
    id: 9,
    artikelNr: 'FRAU-009',
    name: 'Gestreifte Bluse mit Flügelärmeln und Kragen',
    beschreibung:
      'Moderne Bluse mit einem verspielten Look, ideal für den Alltag.',
    kategorie: 'Frauen',
    neuer_preis: 78.0,
    alter_preis: 129.5,
    groesse: 'XS',
    bestand: 10,
    bild: p9_img,
  },
  {
    id: 5,
    artikelNr: 'MANN-017',
    name: 'Herren Bomberjacke mit Reißverschluss in Grün - Slim Fit',
    beschreibung:
      'Sportlich und modisch – die perfekte Jacke für den urbanen Mann.',
    kategorie: 'Maenner',
    neuer_preis: 80.0,
    alter_preis: 130.5,
    groesse: 'L',
    bestand: 18,
    bild: p17_img,
  },
  {
    id: 9,
    artikelNr: 'MANN-021',
    name: 'Herren Bomberjacke mit Reißverschluss in Grün - Slim Fit',
    beschreibung:
      'Kombiniert einen sportlichen und stilvollen Look, perfekt für jede Gelegenheit.',
    kategorie: 'Maenner',
    neuer_preis: 85.0,
    alter_preis: 119.5,
    groesse: 'M',
    bestand: 28,
    bild: p21_img,
  },
  {
    id: 9,
    artikelNr: 'KIND-033',
    name: 'Jungen Kapuzenpullover in Orange mit Farbblockierung',
    beschreibung: 'Dieser Pullover bietet Komfort und Stil für aktive Kinder.',
    kategorie: 'Kinder',
    neuer_preis: 85.0,
    alter_preis: 119.5,
    groesse: 'S',
    bestand: 45,
    bild: p33_img,
  },
];
