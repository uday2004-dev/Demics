// import React, { useEffect, useState } from "react";
// import { FiArrowUpRight } from "react-icons/fi";
// import Form from "../resuable component/Form"
// import api from "../utls/axios";
// const Work = () => {
//   const [allProjects, setAllProjects] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [services, setServices] = useState([]);
//   const [activeService, setActiveService] = useState("all");

//   useEffect(() => {
//     fetchServices();
//     fetchProjects();
//   }, []);




//   const fetchServices = async () => {
//     try {
//       const res = await api.get("/api/services/getAllServices");

//       const data = res.data || {};

//       setServices(data.services || data.data || []);
//     } catch (error) {
//       console.log("Service Error:", error);
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       // const res = await fetch(
//       //   "http://localhost:3000/api/projects"
//       // );

//       // const data = await res.json();
//       const res = await api.get("/api/projects");
//       // const data = await res.json();
//       const data = res.data;

//       const projectData = data.projects || [];

//       setAllProjects(projectData);
//       setProjects(projectData);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const filterProjects = (serviceId) => {
//     setActiveService(serviceId);

//     if (serviceId === "all") {
//       setProjects(allProjects);
//       return;
//     }

//     const filteredProjects = allProjects.filter((project) => {
//       const projectService =
//         typeof project.service === "object"
//           ? project.service?._id
//           : project.service;

//       return String(projectService) === String(serviceId);
//     });

//     setProjects(filteredProjects);
//   };

//   // Sirf wahi services dikhao jinke projects exist karte hain
//   const usedServices = services.filter((service) =>
//     allProjects.some((project) => {
//       const projectService =
//         typeof project.service === "object"
//           ? project.service?._id
//           : project.service;

//       return String(projectService) === String(service._id);
//     })
//   );

//   return (
//     <div>
//       <section className="bg-[#111111] min-h-screen pt-48 pb-24">
//         <div className="max-w-7xl mx-auto px-8">

//           {/* Heading */}
//           <h1
//             className="text-white text-6xl  font-awesome text-center mb-14"
//             // style={{ fontFamily: "serif" }}
//           >
//             Our Projects
//           </h1>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             <button
//               onClick={() => filterProjects("all")}
//               className={`px-6 py-3 rounded-full transition ${activeService === "all"
//                 ? "bg-purple-600 text-white"
//                 : "bg-[#1f1f1f] text-gray-300"
//                 }`}
//             >
//               All Projects
//             </button>

//             {usedServices.map((service) => (
//               <button
//                 key={service._id}
//                 onClick={() => filterProjects(service._id)}
//                 className={`px-6 py-3 rounded-full transition ${activeService === service._id
//                   ? "bg-purple-600 text-white"
//                   : "bg-[#1f1f1f] text-gray-300"
//                   }`}
//               >
//                 {service.name}
//               </button>
//             ))}
//           </div>

//           {/* Projects */}
//           <div className="grid md:grid-cols-2 gap-12">
//             {projects.map((project) => (
//               <div key={project._id}>
//                 <div className="overflow-hidden rounded-[24px]">
//                   <img
//                     src={project.photo}
//                     alt={project.title}
//                     className="w-full h-[350px] object-cover rounded-[24px]"
//                   />
//                 </div>

//                 <div className="mt-5">
//                   <h3 className="text-white text-2xl uppercase mb-4">
//                     {project.title}
//                   </h3>

//                   {project.liveProject && (
//                     <div className="flex justify-between items-center mb-4">
//                       <a
//                         href={project.liveProject}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="bg-[#222] px-4 py-2 rounded-lg text-sm text-gray-300"
//                       >
//                         Visit Website
//                       </a>

//                       <a
//                         href={project.liveProject}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="w-12 h-12 bg-[#222] rounded-xl flex items-center justify-center"
//                       >
//                         <FiArrowUpRight className="text-purple-500 text-xl" />
//                       </a>
//                     </div>
//                   )}

//                   <p className="text-gray-400 leading-7">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {projects.length === 0 && (
//             <div className="text-center text-gray-400 text-xl mt-20">
//               No Projects Found
//             </div>
//           )}
//         </div>
//       </section>

//       <section className="py-28 bg-[#111111]">
//         <div className="max-w-7xl mx-auto px-8">
//           <Form />
//         </div>
//       </section>
//     </div>

//   );
// };

// export default Work;


import React, { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Form from "../resuable component/Form";
import api from "../utls/axios";

// Zig-zag purple glows (right -> left -> right ...)
// const glows = [
//   { side: "right", top: "5%", color: "bg-[#7A00FF]/50" },
//   { side: "left", top: "16%", color: "bg-[#7A00FF]/45" },
//   { side: "right", top: "27%", color: "bg-[#7A00FF]/45" },
//   { side: "left", top: "38%", color: "bg-[#7A00FF]/40" },
//   { side: "right", top: "49%", color: "bg-[#7A00FF]/40" },
//   { side: "left", top: "60%", color: "bg-[#7A00FF]/45" },
//   { side: "right", top: "71%", color: "bg-[#7A00FF]/45" },
//   { side: "left", top: "82%", color: "bg-[#7A00FF]/45" },
//   { side: "right", top: "88%", color: "bg-[#7A00FF]/45" },
// ];

const glows = [
  { side: "right", top: "8%", color: "bg-[#7A00FF]/50" },
  { side: "left", top: "34%", color: "bg-[#7A00FF]/45" },
  { side: "right", top: "60%", color: "bg-[#7A00FF]/45" },
  { side: "left", top: "84%", color: "bg-[#7A00FF]/45" },
];

const Work = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState("all");

  useEffect(() => {
    fetchServices();
    fetchProjects();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await api.get("/api/services/getAllServices");

      const data = res.data || {};

      setServices(data.services || data.data || []);
    } catch (error) {
      console.log("Service Error:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await api.get("/api/projects");
      const data = res.data;

      const projectData = data.projects || [];

      setAllProjects(projectData);
      setProjects(projectData);
    } catch (error) {
      console.log(error);
    }
  };

  const filterProjects = (serviceId) => {
    setActiveService(serviceId);

    if (serviceId === "all") {
      setProjects(allProjects);
      return;
    }

    const filteredProjects = allProjects.filter((project) => {
      const projectService =
        typeof project.service === "object"
          ? project.service?._id
          : project.service;

      return String(projectService) === String(serviceId);
    });

    setProjects(filteredProjects);
  };

  // Sirf wahi services dikhao jinke projects exist karte hain
  const usedServices = services.filter((service) =>
    allProjects.some((project) => {
      const projectService =
        typeof project.service === "object"
          ? project.service?._id
          : project.service;

      return String(projectService) === String(service._id);
    })
  );

  return (
    <div className="relative bg-[#111111] overflow-x-clip">
      <section className="min-h-screen pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}
          <h1 className="text-white text-6xl font-awesome text-center mb-14">
            Our Projects
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => filterProjects("all")}
              className={`px-6 py-3 rounded-full transition ${activeService === "all"
                ? "bg-purple-600 text-white"
                : "bg-[#1f1f1f] text-gray-300"
                }`}
            >
              All Projects
            </button>

            {usedServices.map((service) => (
              <button
                key={service._id}
                onClick={() => filterProjects(service._id)}
                className={`px-6 py-3 rounded-full transition ${activeService === service._id
                  ? "bg-purple-600 text-white"
                  : "bg-[#1f1f1f] text-gray-300"
                  }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project._id}>
                <div className="overflow-hidden rounded-[24px]">
                  <img
                    src={project.photo}
                    alt={project.title}
                    className="w-full h-[350px] object-cover rounded-[24px]"
                  />
                </div>

                <div className="mt-5">
                  <h3 className="text-white text-2xl uppercase mb-4">
                    {project.title}
                  </h3>

                  {project.liveProject && (
                    <div className="flex justify-between items-center mb-4">
                      <a
                        href={project.liveProject}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#222] px-4 py-2 rounded-lg text-sm text-gray-300"
                      >
                        Visit Website
                      </a>

                      <a
                        href={project.liveProject}
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 bg-[#222] rounded-xl flex items-center justify-center"
                      >
                        <FiArrowUpRight className="text-purple-500 text-xl" />
                      </a>
                    </div>
                  )}

                  <p className="text-gray-400 leading-7">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center text-gray-400 text-xl mt-20">
              No Projects Found
            </div>
          )}
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-8 [&>*]:!bg-transparent [&>*]:!overflow-visible">
          <Form />
        </div>
      </section>

      {/* ================= GLOBAL ZIG-ZAG GLOW LAYER ================= */}
      {/* <div className="pointer-events-none absolute top-0 left-0 w-full bottom-[-350px] z-20 overflow-hidden mix-blend-screen">
        {glows.map((g, i) => (
          <div
            key={i}
            className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${
              g.side === "right" ? "right-[-200px]" : "left-[-200px]"
            }`}
            style={{ top: g.top }}
          />
        ))}
      </div> */}

      {/* Glow layer */}
      {/* <div
        className="pointer-events-none absolute top-0 left-0 w-full bottom-[-350px] z-20 overflow-hidden mix-blend-screen"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black calc(100% - 350px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black calc(100% - 350px), transparent 100%)",
        }}
      >
        {glows.map((g, i) => (
          <div
            key={i}
            className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${g.side === "right" ? "right-[-200px]" : "left-[-200px]"
              }`}
            style={{ top: g.top }}
          />
        ))}
      </div> */}

      {/* Glow layer */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full bottom-[-350px] z-20 overflow-hidden mix-blend-screen"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black calc(100% - 350px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black calc(100% - 350px), transparent 100%)",
        }}
      >
        {glows.map((g, i) => (
          <div
            key={i}
            className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${g.side === "right" ? "right-[-200px]" : "left-[-200px]"
              }`}
            style={{ top: g.top }}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;