import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./layout/Home";
import BookDetails from "./features/books/BookDetails";
/*import AuthForm from "./features/auth/AuthForm";*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <Home /> },
      { path: "/books/:id", element: <BookDetails /> },
      /*{ path: "/login", element: <AuthForm /> },*/
    ],
  },
]);

export default router;
