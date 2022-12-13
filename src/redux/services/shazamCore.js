import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '92ad8230c0msh461f041a8a0bca4p13adf6jsnf90c981f5111',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };

//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        '92ad8230c0msh461f041a8a0bca4p13adf6jsnf90c981f5111',
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongRelated: builder.query({query: ({ songid })=> `/tracks/related?track_id=${songid}`}),
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getArtistDetails: builder.query({query: (artistId)=>`/artists/details?artist_id=${artistId}`}),
    getSongsByCountry:builder.query({query: (countryCode)=>`/charts/country?country_code=${countryCode}`}),
    getSongsByGenre: builder.query({query : (genre) =>`/charts/genre-world?genre_code=${genre}`}),
    getSongsBySearch: builder.query({query: (search)=> `/search/multi?search_type=SONGS_ARTISTS&query=${search}`}),
    getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${songid}`,

    }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery,useGetSongsByCountryQuery,useGetSongsByGenreQuery, useGetSongsBySearchQuery } = shazamCoreApi;
