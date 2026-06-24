import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchService = async (serviceId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/services/${serviceId}`
      );

      const data = await res.json();

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
      const res = await fetch("http://localhost:3000/api/projects");
      const data = await res.json();

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
      <section className="bg-black min-h-screen flex justify-center items-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </section>
    );
  }

  return (
    <section className="bg-black min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-white text-6xl italic mb-12"
          style={{ fontFamily: "serif" }}
        >
          {serviceName || "Projects"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project._id}>
              <div className="aspect-square overflow-hidden rounded-[24px]">
                <img
                  src={project.photo}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-[24px]"
                />
              </div>

              <div className="mt-5 flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-white text-2xl font-medium mb-3 uppercase">
                    {project.title}
                  </h2>

                  {project.liveProject && (
                    <a
                      href={project.liveProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#222] text-gray-300 px-4 py-2 rounded-lg mb-4 text-sm"
                    >
                      {project.liveProject}
                    </a>
                  )}

                  <p className="text-gray-400 text-sm leading-7">
                    {project.description}
                  </p>
                </div>

                {project.liveProject && (
                  <a
                    href={project.liveProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center shrink-0"
                  >
                    <FiArrowUpRight
                      size={22}
                      className="text-purple-500"
                    />
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