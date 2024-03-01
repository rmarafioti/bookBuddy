import React from "react";
import { useGetBooksQuery } from "./bookSlice";
import { useParams } from "react-router-dom";
import { Checkout } from "./Checkout";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const { data: books, isLoading, refetch } = useGetBooksQuery();
  const token = useSelector(selectToken);

  const book = books?.find((book) => book.id.toString() === id);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (!book) {
    return <h1>Book not found</h1>;
  }

  // Function to handle successful checkout, such as refetching book data
  const handleCheckoutSuccess = () => {
    refetch(); // Assuming useGetBooksQuery provides a refetch method
    // Alternatively, implement other logic to update UI or state as needed
  };

  /*return all the details for selected book and a button
   *to check book out if you are logged in
   */
  return (
    <>
      <img src={book.coverimage} />
      <h3>{book.title}</h3>
      <h3>{book.author}</h3>
      <p>{book.description}</p>
      <h2>
        {book.available ? "Available for Checkout" : "Currently Checked Out"}
      </h2>
      {token && (
        <Checkout
          bookId={book.id}
          isAvailable={book.available}
          onCheckoutSuccess={handleCheckoutSuccess}
        />
      )}
    </>
  );
}
