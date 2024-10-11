import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
} from "redux-persist";
import favoritesReducer from "./favorites/slice"
import campersReducer from "./campers/slice"
import filtersReducer from "./filters/slice"



export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        campers: campersReducer,
        filters: filtersReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});
export const persistor = persistStore(store);