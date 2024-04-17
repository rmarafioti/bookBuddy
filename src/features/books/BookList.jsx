import React, { useState, useEffect } from "react";
import { useGetBooksQuery } from "./bookSlice";
import { Link } from "react-router-dom";

/**
 *
 * @function BookCard
 * @param {Object} book
 * @returns a single book from the API as a list item displaying the book's title, author, image and a link to see more details of the book.
 *
 */

function BookCard({ book }) {
  return (
    <section>
      <li id="books">
        <h4 id="bookTitle">{book.title}</h4>
        <h5 id="author">{book.author}</h5>
        <img
          id="bookImage"
          src={book.coverimage}
          alt={`cover image of ${book.title}`}
        />
      </li>
      <div>
        <Link id="seeDetails" to={`/books/${book.id}`}>
          See Details
        </Link>
      </div>
    </section>
  );
}

/**
 *
 * @component BookList
 * @returns a search bar, all books from the API via useGetBooksQuery and displays an informative list of them using the BookCard function.
 *
 */

export default function BookList() {
  const { data: books } = useGetBooksQuery();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const searchLower = search.trim().toLocaleLowerCase();
  /**
   *
   * @description searchBooks creates functionality to the search bar by filtering though the list of books from the API that are fetched in this file. The search accounts for upper and lowercase inputs and displays the books that are searched via the search bar. The user is also directed back to the full list of books when the search bar is cleared.
   *
   */
  const searchBooks =
    searchLower === ""
      ? books
      : books?.filter(
          (book) =>
            book.title.toLowerCase().includes(searchLower) ||
            book.author.toLowerCase().includes(searchLower)
        );

  /**
   *
   * @description handleClearSearch directs back to the full list of books when the search bar is cleared.
   *
   */

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <main id="bookList">
      <form onSubmit={handleSubmit}>
        <input
          id="searchBox"
          name="search"
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <button id="search" type="submit">
            Search
          </button>
          <button id="searchClear" type="button" onClick={handleClearSearch}>
            Clear
          </button>
        </div>
      </form>
      <ul id="bookCard">
        {searchBooks?.length ? (
          searchBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </main>
  );
}
