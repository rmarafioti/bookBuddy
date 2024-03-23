import BookList from "../features/books/BookList";

//Our "/" component, the parent component of our book list component

/**
 *
 * @component Home is landing page component which displays the BookList component.
 * @returns BookList component, a list of all the books in the API.
 */

export default function Home() {
  return (
    <>
      <BookList />
    </>
  );
}
