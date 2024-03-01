import { Link } from "react-router-dom";
import { useCheckoutBookMutation } from "./bookSlice";

export default function BookListItem({ book }) {
  const [checkoutBook, { isLoading: isCheckingOut }] =
    useCheckoutBookMutation();

  const handleCheckout = async () => {
    try {
      await checkoutBook({ id: book.id, available: false }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <li>
        <h3>{book.title}</h3>
        <h3>{book.author}</h3>
        <Link to={`/books/${book.id}`}>See Details</Link>
      </li>
    </div>
  );
}
