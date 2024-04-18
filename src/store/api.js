import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 *
 * @description api links API to the baseUrl in API documentation
 *
 */

const api = createApi({
  baseQuery: fetchBaseQuery({
    /*baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",*/
    baseUrl: "https://unit3-bookbuddy-api.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default api;
