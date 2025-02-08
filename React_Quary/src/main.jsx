import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/Page/About.jsx";
import Contect from "./Component/Page/Contect.jsx";
import Service from "./Component/Page/Service.jsx";
import Home from "./Component/Page/Home.jsx";
import FetchInvRQ from "./Component/Page/FetchInvRQ.jsx";
import GithubUser from "./Component/Page/GithubUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <Contect />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service/:id",
        element: <FetchInvRQ />,
      },
      {
        path: "/gitData",
        element: <GithubUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
