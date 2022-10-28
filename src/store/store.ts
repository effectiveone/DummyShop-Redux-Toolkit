import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { DummyShopApi } from "./reducers/itemSlice";
import {reducerPath} from "./reducers/itemSlice";

export const store = configureStore({
  reducer: {
    [DummyShopApi.reducerPath]: DummyShopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(DummyShopApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);