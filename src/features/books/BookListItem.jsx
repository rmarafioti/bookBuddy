import { Link } from "react-router-dom";

export default function BookListItem({ book }) {
  return (
    <li>
      {/* link to individual book/ what is represented in a list item from the api?*/}
      <Link to={"/books/" + book.id}>{book.title}</Link>
    </li>
  );
}
