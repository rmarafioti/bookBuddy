import api from "../../store/api";

//endpoints unique to api documentation

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    /**
     *
     * @description getBooks query gets a list of all the books.
     * @method GET
     *
     */

    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
      transformResponse: (response) => response.books,
      transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     *
     * @description getBook query gets the details of a single book.
     * @method GET
     *
     */

    getBook: builder.query({
      query: (id) => "/books/" + id,
      providesTags: ["books"],
      transformResponse: (response) => response.book,
      transformErrorResponse: (response) => response.data.error.message,
    }),

    /**
     *
     * @description checkoutList query gets a list of books the registered user has checked out.
     * @method GET
     *
     */

    checkoutList: builder.query({
      query: () => "/reservations/",
      providesTags: ["books"],
      transformResponse: (response) => response.reservation,
    }),

    /**
     *
     * @description checkoutOrReturnBook query lets registered user checkout or return book with a valid token.
     * @method PATCH
     *
     */

    checkoutOrReturnBook: builder.mutation({
      query: (id) => ({
        url: "/books/" + id,
        method: "PATCH",
        body: { available: false },
      }),
      invalidatesTags: ["books"],
      transformResponse: (response) => response.book,
    }),

    /**
     *
     * @description deleteReservation query returns a checked out book.
     * @method DELETE
     *
     */

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
