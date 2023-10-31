import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => ({
        url: 'track/all/',
      }),
    }),
    getFavoritesTracks: builder.query({
      query: () => ({
        url: 'track/favorite/all/',
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('accessToken'))
          }`,
        },
      }),
    }),
    addLike: builder.mutation({
        query: (id) => ({
          url: `track/${id}/favorite/`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('accessToken'))
            }`,
          },
        }),
      }),
  }),
});

export const { useGetFavoritesTracksQuery, useGetTracksQuery, useAddLikeMutation } = tracksApi;