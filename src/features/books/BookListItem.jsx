import { Link, useParams } from "react-router-dom";
import { useGetBookQuery } from "./bookSlice";

export default function BookListItem() {
  const { id } = useParams();
  const { data: book } = useGetBookQuery(id);

  return (
    <div>
      <li>
        <h3>{book.title}</h3>
        <h3>{book.author}</h3>
        <Link to={`/books/${books.id}`}>See Details</Link>
      </li>
    </div>
  );
}
