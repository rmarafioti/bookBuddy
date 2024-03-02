import { useGetBooksQuery } from "./bookSlice";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <li>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <Link to={`/books/${book.id}`}>See Details</Link>
    </li>
  );
}

export default function BookList() {
  const { data: books } = useGetBooksQuery();

  return (
    <main>
      <ul>
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </main>
  );
}
