import { createSlice } from "@reduxjs/toolkit";
import {
 
  persistReducer
 
} from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
  items:[]
}

export const sliceFavorites = createSlice({
  name: "Favorites",
  initialState,
  reducers: {
    addFavorites(state, { payload: item }) {
      const index = state.items.findIndex(el => el._id === item._id)
      
      if (index === -1) {
        state.items.push(item)
      } else {
        state.items.splice(index, 1)
      }
    }
    
 
  },
});


const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, sliceFavorites.reducer);

export const { addFavorites} = sliceFavorites.actions;
export default persistedReducer;