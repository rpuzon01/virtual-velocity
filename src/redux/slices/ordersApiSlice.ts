import { Order } from '../../types';
import apiSlice from './apiSlice';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCart: builder.query<Order, void>({
      query: () => '/orders/cart',
      providesTags: ['Cart']

    }),
  })
})

export const {
  useGetCartQuery
} = ordersApiSlice;
