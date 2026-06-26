import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NavBar from "../resuable component/NavBar";
import Footer from "../resuable component/Footer";

import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Work from "../components/Work";
import OpenBlogs from "../components/OpenBlogs";
import Blogs from "../components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <>
        <NavBar />
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: (
      <>
        <NavBar />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/work",
    element: (
      <>
        <NavBar />
        <Work />
        <Footer />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <NavBar />
        <Blogs />
        <Footer />
      </>
    ),
  },
  {
  path: "/blogs/:id",
  element: (
    <>
      <NavBar />
      <OpenBlogs />
      <Footer />
    </>
  ),
},
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;