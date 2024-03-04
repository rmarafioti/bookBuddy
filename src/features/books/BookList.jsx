import React, { useState, useEffect } from "react";
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
  const [search, setSearch] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (search.trim() === "") {
      setSearchBooks(books);
    } else {
      const searchLower = search.toLowerCase();
      const results = books?.filter(
        (book) =>
          book.title.toLowerCase().includes(searchLower) ||
          book.author.toLowerCase().includes(searchLower)
      );
      setSearchBooks(results);
    }
  }, [books, search]);

  const handleClearSearch = () => {
    setSearch("");
    setFilteredBooks(books);
  };

  return (
    <main id="bookList">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button id="search" type="submit">
          Search
        </button>
        <button id="searchClear" type="button" onClick={handleClearSearch}>
          Clear
        </button>
      </form>
      <ul id="bookCard">
        {searchBooks && searchBooks.length > 0 ? (
          searchBooks?.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </main>
  );
}
