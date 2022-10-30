import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import cartSlice from './reducers/cartSlice';
import { DummyShopApi } from './reducers/itemSlice';
import watchListSlice from './reducers/watchListSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    card: cartSlice,
    watchList: watchListSlice,
    [DummyShopApi.reducerPath]: DummyShopApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([DummyShopApi.middleware, sagaMiddleware])
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
