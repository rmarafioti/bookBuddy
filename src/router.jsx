import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./layout/Home";
import BookDetails from "./features/books/BookDetails";
import AuthForm from "./features/auth/AuthForm";
import AccountDetails from "./features/books/AccountDetails";

//define paths to each component / view in the app

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/books", element: <Home /> },
      { path: "/books/:id", element: <BookDetails /> },
      { path: "/login", element: <AuthForm /> },
      { path: "/account", element: <AccountDetails /> },
    ],
  },
]);

export default router;
