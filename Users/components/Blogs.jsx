
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../resuable component/Form";
import api from "../utls/axios";

// Zig-zag purple glows (right -> left -> right ...)
const glows = [
  { side: "right", top: "8%", color: "bg-[#7A00FF]/50" },
  { side: "left", top: "34%", color: "bg-[#7A00FF]/45" },
  { side: "right", top: "60%", color: "bg-[#7A00FF]/45" },
  { side: "left", top: "84%", color: "bg-[#7A00FF]/45" },
];

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

  const fetchServices = async () => {
    try {
      const res = await api.get("/api/services/getAllServices");

      setServices(res.data.services || []);
    } catch (error) {
      console.log("Service Error:", error);
    }
  };

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
    <div className="relative bg-[#111111] overflow-x-clip">
      <section className="min-h-screen pt-48 pb-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Heading */}
          <h1 className="text-white text-6xl font-awesome text-center mb-14">
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
            <div className="text-center text-white text-xl">Loading...</div>
          ) : (
            <>
              {/* Blogs Grid */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* {blogs.map((blog) => (

                                    <div
                    key={blog._id}
                    onClick={() => navigate(`/blogs/${blog._id}`)}
                    className="cursor-pointer group relative z-30"
                  >
                    <div className="overflow-hidden rounded-[24px]">
                      <img
                        src={blog.picture?.[0]}
                        alt={blog.title}
                        className="w-full h-[350px] object-cover rounded-[24px] transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5">
                      <h1 className="text-gray-300 text-2xl mb-3">
                         {blog.heading || blog.title}
                      </h1>
                    </div>
                  </div>
                ))} */}

                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    onClick={() => navigate(`/blogs/${blog._id}`)}
                    className="cursor-pointer group relative z-30"
                  >
                    <div className="overflow-hidden rounded-[24px]">
                      <img
                        src={blog.picture?.[0]}
                        alt={blog.title}
                        className="w-full h-[350px] object-cover rounded-[24px] transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-5 text-white text-2xl md:text-3xl font-medium leading-snug">
                      {blog.heading || blog.title}
                    </h3>
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
      className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${
        g.side === "right" ? "right-[-200px]" : "left-[-200px]"
      }`}
      style={{ top: g.top }}
    />
  ))}
</div>
    </div>
  );
};

export default Blogs;