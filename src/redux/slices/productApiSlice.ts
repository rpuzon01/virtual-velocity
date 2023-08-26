import { Product } from '../../types';
import apiSlice from './apiSlice';


export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
      providesTags: ['Product']
    }),
  })
})

export const {
  useGetProductsQuery
} = productApiSlice;
