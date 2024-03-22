import BookList from "../features/books/BookList";

//Our "/" component, the parent component of our book list component

/**
 *
 * @component Home is landing page component and the parent component of BookList
 * @returns BookList component, a list of all the books in the API.
 */

export default function Home() {
  return (
    <>
      <BookList />
    </>
  );
}
