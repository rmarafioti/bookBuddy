import React from "react";
import { useCheckoutOrReturnBookMutation, useGetBookQuery } from "./bookSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const { data: book } = useGetBookQuery(id);
  const token = useSelector(selectToken);
  const [checkOut] = useCheckoutOrReturnBookMutation();

  const resBook = async (e) => {
    e.preventDefault();
    checkOut(id);
  };

  if (!book) {
    return <h1>Book not found</h1>;
  }

  return (
    <>
      {book ? (
        <section>
          <img src={book.coverimage} alt="Book cover" />
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
      {token ? (
        book?.available === true ? (
          <Link to={"/account"}>
            <button onClick={resBook}>Checkout Book</button>
          </Link>
        ) : (
          <p>Not Available at the Time</p>
        )
      ) : null}
    </>
  );
}
