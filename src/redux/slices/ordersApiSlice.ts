import { Order, OrderProduct } from '../../types';
import apiSlice from './apiSlice';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCart: builder.query<Order, void>({
      query: () => '/orders/cart',
      providesTags: ['Cart']
    }),
    getOrdersByUser: builder.query<Order[], void>({
      query: () => '/orders/users',
      providesTags: ['Orders']
    }),
    addProductToOrder: builder.mutation<OrderProduct, OrderProduct>({
      query: ({orderId, productId, price, quantity}) => ({
        url: `/orders/${orderId}/products`,
        method: 'POST',
        body: {
          productId,
          price,
          quantity
        },
      }),
      invalidatesTags: () => ['Cart']
    })
  })
})

export const {
  useGetCartQuery,
  useAddProductToOrderMutation,
  useGetOrdersByUserQuery,
} = ordersApiSlice;
