import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Service from "../components/service/Service";
import Project from "../components/project/Project";
import Contact from "../components/contact/Contact";
import Error from "../components/error/Error";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "project",
        element: <Project />,
      },

      {
        path: "service",
        element: <Service />,
      },
      
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
