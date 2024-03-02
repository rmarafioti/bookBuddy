import React from "react";
import { useSelector } from "react-redux";
/*import { useCheckoutBookMutation } from "./bookSlice";*/
import { selectToken } from "../auth/authSlice";

/*checkout button needs be visable if the user is logged in which is verified by token
 *authetication.
 *the button needs to indicate if the book is available for checkout of not
 *when clicked the button will checkout the book for the logged in user if the it is available.
 */

export const Checkout = ({ bookId, isAvailable, onCheckoutSuccess }) => {
  const [checkoutBook, { isLoading }] = useCheckoutBookMutation();
  const token = useSelector(selectToken); // Check if the user is logged in

  const handleCheckout = async () => {
    // Check if the book is available and the user is logged in
    if (!isAvailable || !token) {
      alert("The book is not available for checkout or you must be logged in.");
      return;
    }

    try {
      await checkoutBook({ id: bookId }).unwrap();
      // Notify the parent component (BookDetails) about the checkout success
      onCheckoutSuccess();
    } catch (error) {
      console.error("Failed to checkout the book:", error);
      alert("Failed to checkout the book. Please try again.");
    }
  };
  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || !isAvailable || !token}
    >
      {isLoading ? "Processing..." : "Check Out"}
    </button>
  );
};
