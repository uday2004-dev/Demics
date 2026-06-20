import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineAddCircle } from "react-icons/md";
import { getBlogs, deleteBlog } from "../api/blogApi";

const Blogs = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await getBlogs();

      if (res.data.success) {
        setBlogs(res.data.blogs);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const dltBlog = async (id) => {
    try {
      await deleteBlog(id);

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen p-10">
      <div className="flex justify-end mb-10">
        <button
          onClick={() =>
            navigate("/sideBar/blogs/createBlogs")
          }
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg"
        >
          <MdOutlineAddCircle size={24} />
        </button>
      </div>

      {loading ? (
        <h1 className="text-white">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <div className="bg-[#1e1e1e] rounded-xl overflow-hidden h-[220px]">
                <img
                  src={blog.picture?.[0]}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <h3 className="text-white text-sm uppercase">
                  {blog.title}
                </h3>

                <button
                  onClick={() => dltBlog(blog._id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;