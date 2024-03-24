import BookList from "../features/books/BookList";

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
