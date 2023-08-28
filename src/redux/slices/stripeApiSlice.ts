import { Order } from '../../types';
import apiSlice from './apiSlice';

type StripeSessionResponse = {
  URL: string
}

export const stripeApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createStripeSession: builder.mutation<StripeSessionResponse, Order>({
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
