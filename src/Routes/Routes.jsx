import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import Error from "../pages/Error/Error";
import BookDetails from "../pages/BookDetails/BookDetails";
import CustomBar from "../pages/CustomBar/CustomBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/page-to-read",
        element: <CustomBar />,
      },
    ],
    errorElement: <Error />,
  },
]);
