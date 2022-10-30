import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    watchList: []
};

export const watchListSlice = createSlice({
    name: 'watchList',
    initialState,
    reducers: {
        AddToWatchList: (state, { payload }) => {
            const item = state.watchList.find((as) => as.id === payload.id);
            if (item) {
                state.watchList = state.watchList.filter((itme) => itme.id !== payload.id);
            } else {
                state.watchList.push({
                    id: payload.id,
                    img: payload.poster_path,
                    title: payload.title,
                    desc: payload.vdescription,
                    price: payload.price,
                    discountPercentage: payload.discountPercentage,
                    rating: payload.rating,
                    stock: payload.stock,
                    brand: payload.brand,
                    category: payload.category
                });
            }
        },

        RemoveFromWatchList: (state, action) => {
            const itemId = action.payload;
            state.watchList = state.watchList.filter((itme) => itme.id !== itemId);
        }
    }
});

export const { AddToWatchList, RemoveFromWatchList } = watchListSlice.actions;

export default watchListSlice.reducer;
