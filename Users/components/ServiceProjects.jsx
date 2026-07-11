// import { useEffect, useState } from "react";
// import axios from "axios";

// const BrandingProjects = ({ serviceId }) => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     if (serviceId) {
//       fetchProjects();
//     }
//   }, [serviceId]);

//   const fetchProjects = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3000/api/projects/service/${serviceId}`,
//         {
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         setProjects(res.data.projects);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="grid md:grid-cols-3 gap-8">
//       {projects.map((project) => (
//         <div key={project._id}>
//           <img
//             src={project.photo?.[0]}
//             alt={project.title}
//             className="w-full h-72 object-cover rounded-xl"
//           />

//           <h2 className="text-white mt-4 text-xl">
//             {project.title}
//           </h2>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BrandingProjects;



import React, { useEffect, useState } from "react";
// import axios from "axios";
import { FiArrowUpRight } from "react-icons/fi";
import api from "../utls/axios";
const BrandingProjects = ({ serviceId }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (serviceId) {
      fetchProjects();
    }
  }, [serviceId]);

  const fetchProjects = async () => {
    try {
      // const res = await axios.get(
      //   `http://localhost:3000/api/projects/service/${serviceId}`,
      //   {
      //     withCredentials: true,
      //   }
      // );
const res = await api.get(`/api/projects/service/${serviceId}`);
      if (res.data.success) {
        setProjects(res.data.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="w-full bg-[#161717] py-16 flex justify-center items-center">
        <h2 className="text-white text-2xl">Loading...</h2>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="w-full bg-[#161717] py-16 flex justify-center items-center">
        <h2 className="text-white text-2xl">
          No Projects Found
        </h2>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#161717] py-12 md:py-16">

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">

          {projects.map((project) => (
            <div key={project._id} className="flex flex-col">

              {/* IMAGE */}
              <div className="aspect-square overflow-hidden rounded-[20px] md:rounded-[24px]">
                <img
                  src={
                    Array.isArray(project.photo)
                      ? project.photo[0]
                      : project.photo
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-5 flex flex-col sm:flex-row justify-between items-start gap-4">

                <div className="flex-1">

                  <h2 className="text-white text-xl md:text-2xl font-medium uppercase mb-3">
                    {project.title}
                  </h2>

                  {project.liveProject && (
                    <a
                      href={project.liveProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#222] text-gray-300 px-4 py-2 rounded-lg mb-4 text-sm break-all"
                    >
                      {project.liveProject}
                    </a>
                  )}

                  <p className="text-gray-400 text-sm md:text-base leading-7">
                    {project.description}
                  </p>

                </div>

                {project.liveProject && (
                  <a
                    href={project.liveProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center shrink-0 hover:bg-[#8301FE] transition"
                  >
                    <FiArrowUpRight
                      size={22}
                      className="text-purple-500 hover:text-white"
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

export default BrandingProjects;