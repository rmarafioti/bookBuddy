import { useGetBooksQuery } from "./bookSlice";
import { useCheckoutBookMutation } from "./bookSlice";
import BookListItem from "./BookListItem";

export default function BookList() {
  const { data: books } = useGetBooksQuery();
  const {} = useCheckoutBookMutation;

  return (
    <ul>
      {books?.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
