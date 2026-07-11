import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../resuable component/Form";
import api from "../utls/axios";

const Blogs = () => {
  const navigate = useNavigate();

  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
    fetchBlogs();
  }, []);

  //   const fetchServices = async () => {
  //     try {
  //       // const res = await fetch(
  //       //   "http://localhost:3000/api/services/getAllServices"
  //       //   // import.meta.env.VITE_API_URL
  //       // );
  //       const res = await fetch(
  //   `${import.meta.env.VITE_API_URL}/api/services/getAllServices`
  // );

  //       // const data = await res.json();
  //        const data = res.data;

  //       setServices(data.services || []);
  //     } catch (error) {
  //       console.log("Service Error:", error);
  //     }
  //   };


  const fetchServices = async () => {
    try {
      const res = await api.get("/api/services/getAllServices");

      setServices(res.data.services || []);
    } catch (error) {
      console.log("Service Error:", error);
    }
  };


  //   const fetchBlogs = async () => {
  //   try {
  //     const res = await fetch(
  //       `${import.meta.env.VITE_API_URL}/api/blog/getAllBlogs`
  //     );

  //     const data = await res.json();

  //     const blogData = data.blogs || [];

  //     setAllBlogs(blogData);
  //     setBlogs(blogData);
  //   } catch (error) {
  //     console.log("Blog Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/api/blog/getAllBlogs");

      const blogData = res.data.blogs || [];

      setAllBlogs(blogData);
      setBlogs(blogData);
    } catch (error) {
      console.log("Blog Error:", error);
    } finally {
      setLoading(false);
    }
  };


  const filterBlogs = (serviceId) => {
    setActiveService(serviceId);

    if (serviceId === "all") {
      setBlogs(allBlogs);
      return;
    }

    const filteredBlogs = allBlogs.filter((blog) => {
      const blogService =
        typeof blog.services === "object"
          ? blog.services?._id
          : blog.services;

      return String(blogService) === String(serviceId);
    });

    setBlogs(filteredBlogs);
  };

  const usedServices = services.filter((service) =>
    allBlogs.some((blog) => {
      const blogService =
        typeof blog.services === "object"
          ? blog.services?._id
          : blog.services;

      return String(blogService) === String(service._id);
    })
  );

  return (
    <>
      <section className="bg-[#111111] min-h-screen pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Heading */}
          <h1
            className="text-white text-6xl italic text-center mb-14"
            style={{ fontFamily: "serif" }}
          >
            Our Blogs
          </h1>

          {/* Service Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              onClick={() => filterBlogs("all")}
              className={`px-6 py-3 rounded-full transition ${activeService === "all"
                  ? "bg-purple-600 text-white"
                  : "bg-[#1f1f1f] text-gray-300"
                }`}
            >
              All Blogs
            </button>

            {usedServices.map((service) => (
              <button
                key={service._id}
                onClick={() => filterBlogs(service._id)}
                className={`px-6 py-3 rounded-full transition ${activeService === service._id
                    ? "bg-purple-600 text-white"
                    : "bg-[#1f1f1f] text-gray-300"
                  }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading ? (
            <div className="text-center text-white text-xl">
              Loading...
            </div>
          ) : (
            <>
              {/* Blogs Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    onClick={() => navigate(`/blogs/${blog._id}`)}
                    className="cursor-pointer group"
                  >
                    <div className="overflow-hidden rounded-[24px]">
                      <img
                        src={blog.picture?.[0]}
                        alt={blog.title}
                        className="w-full h-[350px] object-cover rounded-[24px] transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5">


                      <h3 className="text-gray-300 text-lg mb-3">
                        {blog.heading}
                      </h3>


                    </div>
                  </div>
                ))}
              </div>

              {blogs.length === 0 && (
                <div className="text-center text-gray-400 text-xl mt-20">
                  No Blogs Found
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Blogs;