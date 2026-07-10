import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Login from '../components/Login'
import SideBar from '../components/SideBar'
import ProtectedRoute from '../components/ProtectedRoute'
import Dashboard from '../components/Dashboard'
import Projects from '../components/Projects'
import ProjectAdd from '../components/ProjectAdd'
import OurServices from '../components/OurServices'
import Services from '../components/Services'
import Blogs from '../components/Blogs'
import Testimonial from '../components/Testimonial'
import CreateBlogs from '../components/CreateBlogs'
import CreateTesti from '../components/CreateTesti'

import TeamCreate from '../components/TeamCreate'
import Team from '../components/Team'
import Inquery from '../components/Inquery'





const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/sideBar",
      element: (
        <ProtectedRoute>
          <SideBar />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />
        },
        {
          path: "project",
          element: <Projects />,
        }, {
          path: "project/projectAdd",
          element: <ProjectAdd />
        }, {
          path: "services",
          element: <OurServices />
        },
        {
          path: "services/create",
          element: <Services />
        },
        {
          path: "blogs",
          element: <Blogs />
        }
        ,
        {
          path: "blogs/createBlogs",
          element: <CreateBlogs />
        }, {
          path: "testimonial",
          element: <Testimonial />
        }, {
          path: "testimonial/createTestimonial",
          element: <CreateTesti />
        },
        {
          path: "team",
          element: <Team />
        },
        {
          path: "team/teamCreate",
          element: <TeamCreate />
        }, {
          path: "inquaries",
          element: <Inquery />
        }

      ]
    }

  ])
  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App