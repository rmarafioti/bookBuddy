import React from "react";
import { useCheckoutOrReturnBookMutation, useGetBookQuery } from "./bookSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";

import "./bookDetails.css";

/*return all info about the selected book via get book query
 *if the book's availability is true notify the user the book is available
 *else notify the user the book has been checked out
 *if the user is logged in via token authentication &&
 *the book is available give the user the option to check the book out via checkout mutation
 *if the book is not available notify the user they can't check the book out.
 */

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
    <main id="bookDetails">
      {book ? (
        <>
          <section>
            <div>
              <h2 id="bookTitle">{book.title}</h2>
              <h4 id="bookTitle">{book.author}</h4>
            </div>
            <div id="imageAndDescrip">
              <img id="bookImage" src={book.coverimage} alt="Book cover" />
              <p id="bookDescrip">{book.description}</p>
            </div>
          </section>
          <section>
            <p
              className={
                book.available
                  ? "bookStatus-available"
                  : "bookStatus-unavailable"
              }
            >
              {book.available
                ? "Available for Checkout"
                : "Someone is Currently Enjoying This Book"}
            </p>
          </section>
        </>
      ) : (
        <p>Loading...</p>
      )}

      {token ? (
        book?.available === true ? (
          <Link to={"/account"}>
            <section id="button">
              <button onClick={resBook}>Checkout Book</button>
            </section>
          </Link>
        ) : (
          <section id="availResSec">
            <p id="availRes">Not Available at the Time</p>
          </section>
        )
      ) : null}
    </main>
  );
}
