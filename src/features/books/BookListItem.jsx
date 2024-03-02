import { Link } from "react-router-dom";
import { useGetBooksQuery } from "./bookSlice";

export default function BookListItem({ bookid }) {
  const { data: books } = useGetBooksQuery();

  /*const [checkoutBook, { isLoading: isCheckingOut }] =
    useCheckoutBookMutation();*/

  /*const handleCheckout = async () => {
    try {
      preventDefault();
      await checkoutBook({ id: book.id, available: false }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };*/

  return (
    <div>
      <li>
        <h3>{books.title}</h3>
        <h3>{books.author}</h3>
        <Link to={`/books/${books.id}`}>See Details</Link>
      </li>
    </div>
  );
}
