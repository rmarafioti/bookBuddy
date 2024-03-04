/*endpoints unique to api documentation
 *GET books
 *checkout book: use patch
 *return book: use DELETE
 *look at documentation for transform response nested object elements
 *look at documentation for transform error response
 */

import api from "../../store/api";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //returns a list of all the books
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
      transformResponse: (response) => response.books,
      transformErrorResponse: (response) => response.data.error.message,
    }),
    //returns the details of a single book
    getBook: builder.query({
      query: (id) => "/books/" + id,
      providesTags: ["books"],
      transformResponse: (response) => response.book,
      transformErrorResponse: (response) => response.data.error.message,
    }),
    //returns a list of books the registered user has checked out
    checkoutList: builder.query({
      query: () => "/reservations/",
      providesTags: ["books"],
      transformResponse: (response) => response.reservation,
    }),
    //registered user can checkout or return book with a valid token
    checkoutOrReturnBook: builder.mutation({
      query: (id) => ({
        url: "/books/" + id,
        method: "PATCH",
        body: { available: false },
      }),
      invalidatesTags: ["books"],
      transformResponse: (response) => response.book,
    }),
    //return checked out book
    deleteReservation: builder.mutation({
      query: (reservationid) => ({
        url: "/reservations/" + reservationid,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
      transformResponse: (response) => response.book,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCheckoutOrReturnBookMutation,
  useDeleteReservationMutation,
  useCheckoutListQuery,
} = bookApi;
