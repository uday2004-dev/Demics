import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import axios from "axios";
import api from "../utls/axios";

const SingleService = () => {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServiceDetails();
  }, [id]);

  const fetchServiceDetails = async () => {
    try {
      setLoading(true);

      const res =
      //  await axios.get(
      //   `http://localhost:3000/api/services/${id}/details `
      await api.get(`/api/services/${id}/details`,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setService(res.data.service);
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
      <div className="min-h-screen bg-[#111111] flex justify-center items-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-[#111111] flex justify-center items-center">
        <h1 className="text-red-500 text-2xl">Service not found.</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] min-h-screen text-white">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <Link
          to="/"
          className="text-gray-400 hover:text-white transition"
        >
          ← Back
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">

          <div>

            <h1
              className="text-6xl italic leading-tight"
              style={{ fontFamily: "serif" }}
            >
              {service.name}
            </h1>

            <p className="mt-8 text-gray-400 leading-8 text-lg">
              {service.description}
            </p>

          </div>

          <div>

            <img
              src={service.photo}
              alt={service.name}
              className="w-full rounded-3xl object-cover"
            />

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <h2
          className="text-5xl italic mb-12"
          style={{ fontFamily: "serif" }}
        >
          Related Projects
        </h2>

        {projects.length === 0 ? (
          <p className="text-gray-400">
            No projects available.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (

              <div
                key={project._id}
                className="bg-[#1B1B1B] rounded-3xl overflow-hidden border border-white/10"
              >

                <img
                  src={project.photo[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mt-4 line-clamp-4">
                    {project.description}
                  </p>

                  <a
                    href={project.liveProject}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-[#8301FE] px-6 py-3 rounded-full"
                  >
                    Visit Project
                  </a>

                </div>

              </div>

            ))}

          </div>
        )}

      </section>

    </div>
  );
};

export default SingleService;