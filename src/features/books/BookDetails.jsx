import React from "react";
import { useCheckoutOrReturnBookMutation, useGetBookQuery } from "./bookSlice";
import { useParams } from "react-router-dom";

import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";

import { Checkout } from "./Checkout";

export default function BookDetails() {
  const { id } = useParams();
  const { data: book } = useGetBookQuery(id);
  const token = useSelector(selectToken);
  const [checkOut] = useCheckoutOrReturnBookMutation();

  /*const book = books?.find((book) => book.id.toString() === id);*/

  const resBook = async (e) => {
    e.preventDefault();
    checkOut(id);
  };

  /*if (isLoading) {
    return <h1>...Loading</h1>;
  }*/

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <>
      {book ? (
        <section>
          <img src={book.coverimage} />
          <h3>{book.title}</h3>
          <h3>{book.author}</h3>
          <p>{book.description}</p>
          {book.available === true ? (
            <p>Available for Checkout</p>
          ) : (
            <p>Not Available at This Time</p>
          )}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

/*<img src={book.coverimage} />
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
  />
)}*/
