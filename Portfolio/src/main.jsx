import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Component/pages/Home.jsx";
import About from "./Component/pages/About.jsx";
import Contect from "./Component/pages/Contect.jsx";
import Project from "./Component/Work/Project.jsx";
import MiniProject from "./Component/Work/MiniProject.jsx";
import ProjectDetails from "./Component/Work/pages/ProjectDetails.jsx";
import MiniProjectDetails from "./Component/Work/pages/ShowIndvProject.jsx";

const queryClient = new QueryClient();

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
        path: "/mega-projects",
        element: <Project />,
      },
      {
        path: "/mini-projects",
        element: <MiniProject />,
      },
      {
        path: "/mega-projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/mini-project-details/:id",
        element: <MiniProjectDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
