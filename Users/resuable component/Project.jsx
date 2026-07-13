import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import api from "../utls/axios";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [loading, setLoading] = useState(true);

  // const fetchService = async (serviceId) => {
  //   try {
  //     // const res = await fetch(
  //     //   `http://localhost:3000/api/services/${serviceId}`
  //     // );
  //     const res = await api.get(`/api/services/${serviceId}`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     const data = await res.json();

  //     setServiceName(
  //       data?.name ||
  //       data?.service?.name ||
  //       data?.data?.name ||
  //       "Projects"
  //     );
  //   } catch (error) {
  //     console.log("Error fetching service:", error);
  //   }
  // };

  const fetchService = async (serviceId) => {
  try {
    const res = await api.get(`/api/services/${serviceId}`, {
      withCredentials: true,
    });

    const data = res.data;

    setServiceName(
      data?.name ||
      data?.service?.name ||
      data?.data?.name ||
      "Projects"
    );

  } catch (error) {
    console.log("Error fetching service:", error);
  }
};

  const fetchProjects = async () => {
    try {
      // const res = await fetch("http://localhost:3000/api/projects");
      //  const res = await api.get(`/api/services/${serviceId}`,
      //   {
      //     withCredentials: true,
      //   }
      // );
      const res = await api.get("/api/projects", {
        withCredentials: true,
      });
      // const data = await res.json();
      const data = res.data;

      const projectsData = data.projects || data;

      setProjects(projectsData);

      if (projectsData.length > 0 && projectsData[0].service) {
        const serviceId =
          typeof projectsData[0].service === "object"
            ? projectsData[0].service._id
            : projectsData[0].service;

        fetchService(serviceId);
      }
    } catch (error) {
      console.log("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-black min-h-[60vh] flex justify-center items-center">
        <h1 className="text-white text-xl md:text-2xl">Loading...</h1>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#101110] py-12 md:py-16">

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Heading */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-light mb-10 md:mb-12">
          {/* {serviceName || "Projects"} */}
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">

          {projects.map((project) => (
            <div key={project._id} className="flex flex-col">

              {/* IMAGE */}
              <div className="aspect-square overflow-hidden rounded-[16px] md:rounded-[24px]">
                {/* <div className="aspect-square overflow-hidden rounded-[16px] md:rounded-[24px] bg-[#161717]"> */}
                <img

                  src={project.photo}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-4 md:mt-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 ">


                <div className="flex-1  bg-[#101110]">

                  <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 md:mb-3 uppercase">
                    {project.title}
                  </h2>

                  {project.liveProject && (
                    <a
                      href={project.liveProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#222] text-gray-300 px-3 md:px-4 py-2 rounded-lg mb-3 text-xs sm:text-sm break-all"
                    >
                      {project.liveProject}
                    </a>
                  )}

                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-6 md:leading-7">
                    {project.description}
                  </p>

                </div>

                {/* ICON BUTTON */}
                {project.liveProject && (
                  <a
                    href={project.liveProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#222] flex items-center justify-center shrink-0"
                  >
                    <FiArrowUpRight size={18} className="md:text-[22px] text-purple-500" />
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Project;