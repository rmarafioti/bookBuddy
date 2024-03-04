import { useGetBooksQuery } from "./bookSlice";
import { Link } from "react-router-dom";

/*return a list of all the books in the api via get books query
 *create a function to display characteristics for each book in the BookList to be displayed
 *each book has a Link to route the user to see more details about the book
 */

function BookCard({ book }) {
  return (
    <li id="books">
      <h2 id="bookTitle">{book.title}</h2>
      <h5 id="author">{book.author}</h5>
      <img id="bookImage" src={book.coverimage} alt="Book cover" />
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
        {books?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </ul>
    </main>
  );
}
