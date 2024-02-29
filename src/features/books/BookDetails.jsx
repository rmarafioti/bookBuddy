import { useGetBooksQuery } from "./postSlice";
{
  /*import { useGetMeQuery } from "../auth/authSlice";*/
}
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { data: books } = useGetBooksQuery();
  /*const { data: me } = useGetMeQuery();*/

  const { id } = useParams();

  const post = books?.find((book) => book.id === id);

  /*const isAuthor = me?._id === post?.author._id;*/

  /*return all the details for selected book and a button
   *to check book out if you are logged in
   */
  return (
    <>
      <h1>{post?.title}</h1>
      {isAuthor && <button>Delete</button>}
    </>
  );
}
