/*api file is copy paste boilerplate
 *except for base URL in api documentation
 *do not add "/" to end of base url
 */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
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
