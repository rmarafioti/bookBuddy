import { useGetBooksQuery } from "./bookSlice";
import { Link } from "react-router-dom";

/*BookCard function to display characteristics for each book
 *in the BookList
 */
function BookCard({ book }) {
  return (
    <li id="books">
      <p>{book.title}</p>
      <h3>{book.author}</h3>
      <Link id="seeDetails" to={`/books/${book.id}`}>
        See Details
      </Link>
    </li>
  );
}

export default function BookList() {
  const { data: books } = useGetBooksQuery();

  return (
    <main id="bookList">
      <ul id="bookCard">
        {/*map over list of books to display BookCard function */}
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </main>
  );
}
