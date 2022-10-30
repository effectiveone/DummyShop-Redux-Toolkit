import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import ApiConfig from '../ApiConfig';

export const DummyShopApi = createApi({
    reducerPath: 'DummyShopApi',
    baseQuery: fetchBaseQuery({ baseUrl: ApiConfig.API_ENDPOINT_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getSingleProduct: builder.mutation({
            query: ({ query }) => {
                return {
                    url: `/products/${query}`,
                    method: 'get'
                };
            }
        }),
        getSearchProduct: builder.mutation({
            query: (query) => {
                return {
                    url: `/products/search?q=${query}`,
                    method: 'get'
                };
            }
        }),

        getCategories: builder.query({
            query: () => '/products/categories'
        }),
        getProductFromCategory: builder.mutation({
            query: (query) => {
                return {
                    url: `/products/category/${query}`,
                    method: 'get'
                };
            }
        })
    })
});

export const {
    useGetProductsQuery,
    useGetCategoriesQuery,
    useGetSingleProductMutation,
    useGetSearchProductMutation,
    useGetProductFromCategoryMutation
} = DummyShopApi;

export const { endpoints, reducerPath, reducer, middleware } = DummyShopApi;
