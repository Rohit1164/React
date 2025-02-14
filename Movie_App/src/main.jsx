import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Component/Page/Home.jsx";
import Movie from "./Component/Page/Movie.jsx";
import About from "./Component/Page/About.jsx";
import TVShow from "./Component/Page/TVShow.jsx";
import ErrorPage from "./Component/Page/ErrorPage.jsx";
import { getMovieData } from "./Component/FetchData/GetApiData.jsx";
import ContactForm from "./Component/Page/Contect.jsx";
import GetMovieCard from "./Component/Page/GetMovieCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contect",
        element: <ContactForm />,
      },
      {
        path: "/movie",
        element: <Movie />,
        loader: getMovieData,
      },
      {
        path: "/tv",
        element: <TVShow />,
      },
      {
        path: "/movie/:id",
        element: <GetMovieCard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
