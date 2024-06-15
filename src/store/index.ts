import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "@/api/postsApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import favoritesSlice from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    favorites: favoritesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
