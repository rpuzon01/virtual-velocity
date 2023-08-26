import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store';

const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Cart', 'Product'],
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/api',
    prepareHeaders: (headers, { getState }) => {
      const {auth: {token}} = getState() as RootState;
      if (token)  {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    _: builder.query({
      query: () => '/'  
    })
  })
});

export default apiSlice;
