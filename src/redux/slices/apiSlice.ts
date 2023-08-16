import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api'}),
  endpoints: (builder) => ({
    _: builder.query({
      query: () => '/'  
    })

  })
});

export default apiSlice;
