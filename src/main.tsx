import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { StrictMode } from "react";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Vacancies from "./pages/Vacancies";
import Courses from "./pages/Courses";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  {
    path: "/vacancies",
    element: <Vacancies/>
  },
  {
    path: "/courses",
    element: <Courses/>
  }
]);

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
