import { createSlice, PayloadAction } from '@reduxjs/toolkit';



const initial: string[] = []; 

const system_Slice = createSlice({
  name: 'system', 
  initialState: initial,

  reducers: {
    updateSystem: (state, action: PayloadAction<{ updated : string[] }>) => {
      const { updated } = action.payload;
      return updated; 
    },
  },
});


export const updateSystem__Hilfe = (updated: string[]) => {
  return {
    type: 'system/updateSystem', //oder system_Slice.actions.updateSystem.type, 
    payload: {
      updated,
    },
  };
};

export default system_Slice.reducer;
