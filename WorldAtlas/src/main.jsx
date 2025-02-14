// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/page/About.jsx";
import Contact from "./Components/page/Contact.jsx";
import Country from "./Components/page/Country.jsx";
import Hero from "./Components/page/Hero.jsx";
import ShowInvCountry from "./Components/page/ShowInvCountry.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/country/:name",
        element: <ShowInvCountry />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </StrictMode>
);
