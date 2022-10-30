import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'card',
    initialState: {
        items: [],
        totalAmount: 0,
        totalCount: 0
    },

    reducers: {
        getCartTotal: (state, action) => {
            const { totalAmount, totalCount } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, amount } = cartItem;
                    const itemTotal = price * amount;

                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalCount += amount;
                    return cartTotal;
                },
                {
                    totalAmount: 0,
                    totalCount: 0
                }
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalCount = totalCount;
        },
        remove: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        increase: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
        },
        decrease: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            if (item.amount === 1) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            } else {
                item.amount--;
            }
            // state.items = state.items.map((item) => {
            //   if (item.id === action.payload.id) {
            //     return { ...item, amount: item.amount - 1 };
            //   }
            //   return item;
            // });
        },
        clearCart: (state, action) => {
            state.items = [];
        },
        addToCart: (state, { payload }) => {
            const item = state.items.find((as) => as.id === payload.id);
            if (item) {
                item.amount++;
            } else {
                state.items.push({
                    amount: 1,
                    id: payload.id,
                    thumbnail: payload.thumbnail,
                    title: payload.title,
                    description: payload.description,
                    price: payload.price,
                    discountPercentage: payload.discountPercentage,
                    rating: payload.rating,
                    stock: payload.stock,
                    brand: payload.brand,
                    category: payload.category
                });
            }
        }
    }
});

export const { getCartTotal, remove, increase, decrease, clearCart, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
