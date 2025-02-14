import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice, counterSlice } from "./slices";
import { todosApi } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});

setupListeners(store.dispatch);
