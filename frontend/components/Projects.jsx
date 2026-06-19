import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { getProjects } from "../api/projectApi";
import { getServices } from "../api/servicesApi";

const Projects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] =
    useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
    fetchServices();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await getProjects();

      if (res.data.success) {
        setProjects(res.data.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      const res = await getServices();

      if (res.data.success) {
        setServices(res.data.services);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProjects = selectedService
    ? projects.filter(
        (project) =>
          project.service?._id ===
          selectedService
      )
    : projects;

  return (
    <div className="bg-black min-h-screen p-10">
      {/* Service Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {services.map((service) => (
          <button
            key={service._id}
            onClick={() =>
              setSelectedService(service._id)
            }
            className={`px-5 py-2 rounded-full text-sm transition cursor-pointer ${
              selectedService === service._id
                ? "bg-purple-600 text-white"
                : "bg-[#1e1e1e] text-gray-300"
            }`}
          >
            {service.name}
          </button>
        ))}

        {/* Show All */}
        <button
          onClick={() =>
            setSelectedService("")
          }
          className={`px-5 py-2 rounded-full text-sm transition cursor-pointer ${
            selectedService === ""
              ? "bg-purple-600 text-white"
              : "bg-[#1e1e1e] text-gray-300"
          }`}
        >
          All
        </button>

        {/* Add Button */}
        <button
          onClick={() =>
            navigate(
              "/sideBar/project/projectAdd"
            )
          }
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg"
        >
          <MdOutlineAddCircle size={24} />
        </button>
      </div>

      {/* Nested Route */}
      <Outlet />

      {/* Project Cards */}
      {loading ? (
        <h1 className="text-white">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project._id}>
              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden h-[220px]">
                <img
                  src={project.photo?.[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-white mt-3 text-sm uppercase">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;




  

// import React from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'

// const Projects = () => {
//     const navigate = useNavigate()
//     return (
//         <>
//             <div>
//                 Project
//                 <button onClick={() => { navigate("/sideBar/project/projectAdd") }}>click</button>
//             </div>

//             <div>
//                 <Outlet />
//             </div>
//         </>


//     )
// }

// export default Projects