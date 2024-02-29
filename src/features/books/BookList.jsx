import { useGetBooksQuery } from "./bookSlice";
import BookListItem from "./BookListItem";

export default function BookList() {
  const { data: books } = useGetBooksQuery();
  return (
    <ul>
      {books?.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </ul>
  );
}
