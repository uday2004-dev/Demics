import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import { getServices } from "../api/servicesApi";
import { createBlog } from "../api/blogApi";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    description: "",
    services: "",
  });

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getServices();

      setServices(
        res.data.services ||
          res.data.data ||
          []
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("title", formData.title);
      data.append("heading", formData.heading);
      data.append(
        "description",
        formData.description
      );
      data.append(
        "services",
        formData.services
      );

      if (photo) {
        data.append("picture", photo);
      }

      const res = await createBlog(data);

      alert(res.data.message);

      setFormData({
        title: "",
        heading: "",
        description: "",
        services: "",
      });

      setPhoto(null);

      navigate("/sideBar/blogs");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <form
        onSubmit={handleForm}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-xl mb-8 font-medium">
          Adding New Blog
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block mb-2">
                Blog Title*
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">
                Blog Heading*
              </label>

              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                placeholder="Enter blog heading"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">
                Select Service*
              </label>

              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
              >
                <option
                  value=""
                  className="text-black"
                >
                  Select Service
                </option>

                {services.map((service) => (
                  <option
                    key={service._id}
                    value={service._id}
                    className="text-black"
                  >
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <label
              htmlFor="picture"
              className="w-full h-[320px] rounded-2xl bg-purple-500 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-6xl">
                  <GrGallery />
                </div>
              )}
            </label>

            <input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                setPhoto(e.target.files[0])
              }
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <label className="block mb-2">
            Description*
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter blog description"
            className="w-full h-52 bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-8 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-medium"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;