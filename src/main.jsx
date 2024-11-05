import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./routes/Root.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import BookDetails from "./BookDeatails/BookDetails.jsx";
import ListedBooks from "./ListedBooks/ListedBooks.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/booksData.json"), // Do not load all the books for one single book
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
        loader: () => fetch("/booksData.json"), // Do not load all the books for one single book
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
