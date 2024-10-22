import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { T_Bestellung } from '../type/T_Bestellung';
import { T_Produkt_Cart } from '../type/T_Produkt_Cart';

const initial: T_Bestellung = {
  bestellungs_Nr: 1,
  kunde_Nr: '1',
  produkt_List: [] as T_Produkt_Cart[],
  preis: 0,
  stand: 'lauft',
  bestellungs_Datum: new Date().toString(),
};

const Cart_Slice = createSlice({
  name: 'cart',
  initialState: initial,

  reducers: {
    addItem: (state, action: PayloadAction<T_Produkt_Cart>) => {
      const neuItem = action.payload;
      // Vérifiez si l'article existe déjà dans le panier
      const existingItem = state.produkt_List.find(
        (item) => item.produkt_ID === neuItem.produkt_ID && item.produkt_Kategorie === neuItem.produkt_Kategorie
      );
      if (existingItem) {
        // Si l'article existe déjà, augmentez simplement la quantité
        existingItem.anzahl += neuItem.anzahl;
      } else {
        // Sinon, ajoutez le nouvel article à la liste
        state.produkt_List.push(neuItem);
      }
      // Mettez à jour le prix total
      state.preis += neuItem.produktPreis * neuItem.anzahl;
    },
    updateItem: (state, action: PayloadAction<T_Produkt_Cart>) => {
      const updatedItem = action.payload;
      const existingItem = state.produkt_List.find(
        (item) => item.produkt_ID === updatedItem.produkt_ID
      );
      if (existingItem) {
        // Mettez à jour la quantité
        state.preis -= existingItem.produktPreis * existingItem.anzahl; // Déduire l'ancien prix
        existingItem.anzahl = updatedItem.anzahl; // Mettre à jour la quantité
        state.preis += existingItem.produktPreis * existingItem.anzahl; // Ajouter le nouveau prix
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const  id  = action.payload;
      const index = state.produkt_List.findIndex(
        (item) => item.cart_ID === id 
      );
      if (index !== -1) {
        // Mettez à jour le prix total
        state.preis -=
          state.produkt_List[index].produktPreis *
          state.produkt_List[index].anzahl;
        // Supprimez l'article de la liste
        state.produkt_List.splice(index, 1);
      }
    },
  },
});

// Actions exportées pour utiliser dans les composants
export const { addItem, updateItem, deleteItem } = Cart_Slice.actions;

// Exports de l'export par défaut du réducteur
export default Cart_Slice.reducer;
