import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/pages/Home.jsx";
import About from "./Component/pages/About.jsx";
import Contect from "./Component/pages/Contect.jsx";
import Project from "./Component/Work/Project.jsx";
import MiniProject from "./Component/Work/MiniProject.jsx";
import ProjectDetails from "./Component/Work/pages/ProjectDetails.jsx";
// import Skill from "./Component/Skills/Skill.jsx";
// import MoreAbout from "./Component/About/MoreAbout.jsx";

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
        path: "/contact",
        element: <Contect />,
      },
      {
        path: "/mega-porjects",
        element: <Project />,
      },
      {
        path: "/mini-projects",
        element: <MiniProject />,
      },
      {
        path: "/details",
        element: <ProjectDetails />,
      },
      // {
      //   path: "/about-more",
      //   element: <MoreAbout />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
