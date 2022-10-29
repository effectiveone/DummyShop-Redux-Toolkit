import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { DummyShopApi } from "./reducers/itemSlice";
import  cartSlice  from "./reducers/cartSlice";
import  watchListSlice  from "./reducers/watchListSlice";
import {reducerPath} from "./reducers/itemSlice";
import { combineReducers } from 'redux'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware();



export const rootReducer = combineReducers({
  card: cartSlice,
  watchList: watchListSlice,
  [DummyShopApi.reducerPath]: DummyShopApi.reducer
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([DummyShopApi.middleware, sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);

