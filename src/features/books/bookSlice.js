/*endpoints unique to api documentation
 *GET books
 *checkout book: use patch
 *return book: use DELETE
 *look at documnetation for transform response nested object elements
 *look at documentation for transform error response "
 */

import api from "../../store/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
      transformResponse: (response) => response.books /*could be data.books*/,
      transformErrorResponse: (response) => response.data.error.message,
    }),
    checkoutBook: builder.mutation({
      query: ({ id, available }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: available,
      }),
      invalidateTags: ["books"],
      transformErrorResponse: (response) => response.data.message,
    }),
    deleteReservation: builder.mutation({
      query: (reservationid) => ({
        url: "/reservations/" + reservationid,
        method: "DELETE",
      }),
      invalidateTags: ["books"],
      transformResponse: (response) => response.book,
    }),
    checkoutList: builder.query({
      query: () => "/reservations/",
      provideTags: ["books"],
      transformResponse: (response) => response.reservation,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCheckoutBookMutation,
  useDeleteReservationMutation,
  useCheckoutListQuery,
} = bookApi;
