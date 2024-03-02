import React from "react";
import { useCheckoutOrReturnBookMutation } from "./bookSlice";
import { useParams } from "react-router-dom"

import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";


/*checkout button needs be visable if the user is logged in which is verified by token
 *authetication.
 *the button needs to indicate if the book is available for checkout of not
 *when clicked the button will checkout the book for the logged in user if the it is available.
 */

export default function Checkout() {
  const { id } = useParams();
  const token = useSelector(selectToken); // Check if the user is logged in
  const [checkOut] = useCheckoutOrReturnBookMutation();

  const handleCheckout = async () => {
    // Check if the book is available and the user is logged in
    if (!isAvailable || !token) {
      alert("The book is not available for checkout or you must be logged in.");
      return;
    };

    /*try {
      await checkoutBook({ id: bookId }).unwrap();
      // Notify the parent component (BookDetails) about the checkout success
      onCheckoutSuccess();
    } catch (error) {
      console.error("Failed to checkout the book:", error);
      alert("Failed to checkout the book. Please try again.");
    }
  };*/
  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || !isAvailable || !token}
    >
      {isLoading ? "Processing..." : "Check Out"}
    </button>
  );
}

/*{token && (
  <Checkout
    bookId={book.id}
    isAvailable={book.available}
  />*/
