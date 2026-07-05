

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
import Contact from "../components/Contact";
import Privacy from "../components/Privacy";
import Terms from "../components/Terms";
import Branding from "../components/Branding"; 
import Marketing from "../components/Marketing";
import Adcreations from "../components/Adcreations";
import WebDevelopment from "../components/WebDevelopment";
import SocialMediaManagement from "../components/SocialMediaManagement";

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

  // 🔥 SERVICE DETAILS (ID BASED)
//  {
//   path: "/services/:id",
//   element: (
//     <>
//       <NavBar />
//       <SingleService />
//       <Footer />
//     </>
//   ),
// },

  // 🔥 BRANDING PAGE (STATIC ROUTE)
  // {
  //   path: "/branding",
  //   element: (
  //     <>
  //       <NavBar />
  //       <Branding />
  //       <Footer />
  //     </>
  //   ),
  // },

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
  {
    path: "/contact",
    element: (
      <>
        <NavBar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/terms-condition",
    element: (
      <>
        <NavBar />
        <Terms />
        <Footer />
      </>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <>
        <NavBar />
        <Privacy />
        <Footer />
      </>
    ),
  },
  // {
  //   path: "/marketing",
  //   element: (
  //     <>
  //       <NavBar />
  //       <Marketing />
  //       <Footer />
  //     </>
  //   ),
  // },
  // {
  //   path: "/adcreation",
  //   element: (
  //     <>
  //       <NavBar />
  //       <Adcreations />
  //       <Footer />
  //     </>
  //   ),
  // },
  // {
  //   path: "/development",
  //   element: (
  //     <>
  //       <NavBar />
  //       <WebDevelopment />
  //       <Footer />
  //     </>
  //   ),
  // },


  {
  path: "/branding/:id",
  element: (
    <>
      <NavBar />
      <Branding />
      <Footer />
    </>
  ),
},
{
  path: "/marketing/:id",
  element: (
    <>
      <NavBar />
      <Marketing />
      <Footer />
    </>
  ),
},
{
  path: "/adcreation/:id",
  element: (
    <>
      <NavBar />
      <Adcreations />
      <Footer />
    </>
  ),
},
{
  path: "/development/:id",
  element: (
    <>
      <NavBar />
      <WebDevelopment />
      <Footer />
    </>
  ),
},
{
  path: "/socialmediamanagement/:id",
  element: (
    <>
      <NavBar />
  <SocialMediaManagement/>
      <Footer />
    </>
  ),
},
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;