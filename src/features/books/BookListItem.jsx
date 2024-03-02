import { Link, useParams } from "react-router-dom";
import { useGetBookQuery } from "./bookSlice";

export default function BookListItem() {
  const { id } = useParams();
  const { data: book } = useGetBookQuery(id);

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
        <h3>{book.title}</h3>
        <h3>{book.author}</h3>
        <Link to={`/books/${books.id}`}>See Details</Link>
      </li>
    </div>
  );
}
