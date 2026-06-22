import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      axios.defaults.withCredentials = true;

      const res = await axios.get(
        "http://localhost:3000/api/projects"
      );

      if (res.data.success) {
        setProjects(res.data.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-5">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#1e1e1e] rounded-xl overflow-hidden"
            >
              <img
                src={project.photo?.[0]}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-3">
                <h3 className="text-white text-sm uppercase">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;