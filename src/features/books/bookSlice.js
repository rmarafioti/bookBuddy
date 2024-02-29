/*endpoints unique to api documentation
 *GET books
 *checkout book: use patch
 *return book: use DELETE
 *look at documnetation for transform response nested object elements
 *look at documentation for transform error response "
 */

import api from "../../store/api";

const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      transformResponse: (response) => response.books /*could be data.books*/,
      transformErrorResponse: (response) => response.data.error.message,
    }),
    checkoutBook: builder.mutation({
      query: (id) => ({
        url: "/books/book.id",
        method: "PATCH",
        body: { available },
      }),
      transformResponse: (response) => response.data.book,
      transformErrorResponse: (response) => response.data.error.message,
    }),
    deleteReservation: builder.mutation({
      query: (id) => ({
        url: `/reservations/reservation.id`,
        method: "DELETE",
      }),
      transformErrorResponse: (response) => response.data.error.message,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCheckoutBookMutation,
  useDeleteReservationMutation,
} = postApi;
