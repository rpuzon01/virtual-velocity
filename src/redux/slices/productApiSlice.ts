import { Product } from '../../types';
import apiSlice from './apiSlice';


export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/products'
    })
  })
})

export const {
  useGetProductsQuery
} = productApiSlice;
