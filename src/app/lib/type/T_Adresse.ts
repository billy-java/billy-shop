

export type T_Adresse = {
  strasse: string;
  hausnummer: string;
  plz: number;
  stadt: string;
  land: string;
};


export const adresseAnzeige = (adresse: T_Adresse) => {
  
  return adresse.strasse + " " + adresse.hausnummer + ", " + adresse.plz + " " + adresse.stadt + " ("+ adresse.land+")";

}