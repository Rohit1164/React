import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contect from "./Component/Contect.jsx";
import Project from "./Component/Work/Project.jsx";
import MiniProject from "./Component/Skills/MiniProject.jsx";
import Skill from "./Component/Skills/Skill.jsx";
import MoreAbout from "./Component/About/MoreAbout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "/project",
        element: <Project />,
      },
      {
        path: "/mini-projects",
        element: <MiniProject />,
      },
      {
        path: "/skills",
        element: <Skill />,
      },
      {
        path: "/about-more",
        element: <MoreAbout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
