import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Class from "./Components/Class/Class.jsx";
import Teachers from "./Components/Teachers/Teachers.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import About from "./Components/About/About.jsx";
import Error from "./Components/Error/Error.jsx";
import ClassDetaills from "./Components/Class/ClassDetaills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/class",
        element: <Class></Class>,
        loader: () => fetch("../public/fakedb.json"),
      },
      {
        path: "/class/:id",
        element: <ClassDetaills></ClassDetaills>,
        loader: () => fetch("../public/fakedb.json"),
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
