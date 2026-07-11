import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../resuable component/Form";
import api from "../utls/axios";

const OpenBlogs = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      // const res = await fetch(
      //   `http://localhost:3000/api/blog/${id}`
      // );
      const res = await api.get(`/api/blog/${id}`);
      const data = await res.json();

      if (data.success) {
        setBlog(data.blog);
        fetchLatestBlogs(data.blog._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLatestBlogs = async (currentBlogId) => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/blog/getAllBlogs"
      );

      const data = await res.json();

      const latestBlogs =
        data.blogs
          ?.filter((item) => item._id !== currentBlogId)
          .sort(
            (a, b) =>
              new Date(b.createdAt) - new Date(a.createdAt)
          )
          .slice(0, 2) || [];

      setSimilarBlogs(latestBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return (
      <div className="bg-[#111111] min-h-screen flex justify-center items-center text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-[#111111] min-h-screen pt-44 pb-24">
      <div className="max-w-5xl mx-auto px-8">

        {/* Hero Image */}
        <img
          src={blog.picture?.[0]}
          alt={blog.title}
          className="w-full h-[450px] object-cover rounded-[24px]"
        />

        {/* Blog Content */}
        <div className="mt-10">
          <div className="flex gap-3 mb-4">
            <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
              {blog.services?.name}
            </span>

            <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>

          <h1 className="text-white text-5xl font-semibold mb-5">
            {blog.title}
          </h1>

          <h2 className="text-white text-3xl mb-8">
            {blog.heading}
          </h2>

          <p className="text-gray-400 leading-8 whitespace-pre-line">
            {blog.description}
          </p>
        </div>

        {/* Other Blogs */}
        {similarBlogs.length > 0 && (
          <div className="mt-28">
            <h2
              className="text-white text-5xl italic mb-10"
              style={{ fontFamily: "serif" }}
            >
              Other Similar Blogs
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {similarBlogs.map((item) => (
                <div
                  key={item._id}
                  onClick={() => navigate(`/blogs/${item._id}`)}
                  className="cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-[20px]">
                    <img
                      src={item.picture?.[0]}
                      alt={item.title}
                      className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="text-white text-2xl mt-4 leading-snug">
                    {item.heading}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => navigate("/blogs")}
                className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full"
              >
                VIEW MORE BLOGS
              </button>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="mt-28">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default OpenBlogs;