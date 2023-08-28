import { Order } from '../../types';
import apiSlice from './apiSlice';

export const stripeApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createStripeSession: builder.mutation<string, Order>({
      query: (order) => ({
        url: '/stripe/create-checkout-session',
        method: 'POST',
        body: order,
      }),
    }),
  })
})

export const {
  useCreateStripeSessionMutation
} = stripeApiSlice;
