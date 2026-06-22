import React, { useEffect, useState } from "react";
import { createProject } from "../api/projectApi";
import { getServices } from "../api/servicesApi";
import { useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";

const ProjectAdd = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    liveProject: "",
    service: "",
    testimonial: "",
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
      data.append(
        "description",
        formData.description
      );
      data.append(
        "liveProject",
        formData.liveProject
      );
      data.append("service", formData.service);
      data.append(
        "testimonial",
        formData.testimonial
      );

      if (photo) {
        data.append("photo", photo);
      }

      const res = await createProject(data);

      alert(res.data.message);

      setFormData({
        title: "",
        description: "",
        liveProject: "",
        service: "",
        testimonial: "",
      });

      setPhoto(null);
      navigate("/sideBar/project");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 text-white ">
      <form
        onSubmit={handleForm}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-xl mb-8 font-medium">
          Adding New Project
        </h2>

        {/* Top Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block mb-2">
                Title for the Project*
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter here"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2">
                Description for the Project*
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter here"
                className="w-full h-32 bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none resize-none"
              />
            </div>

            <div>
              <label className="block mb-2">
                Link for Website/Live Project
              </label>

              <input
                type="url"
                name="liveProject"
                value={formData.liveProject}
                onChange={handleChange}
                placeholder="Enter here"
                className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <div className="h-[220px] rounded-xl bg-purple-500 overflow-hidden">
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div>
              <label className="block mb-2">
                Select Service
              </label>

              <select
                name="service"
                value={formData.service}
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
        </div>

        {/* Upload Section */}
        <div className="mt-8">
          <label
            htmlFor="photo"
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
            id="photo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              setPhoto(e.target.files[0])
            }
          />

</div>


      


        <button
          type="submit"
          className="mt-8 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-medium"
        >
          Create Project
        </button>
      </form>
    </div>
  );
};

export default ProjectAdd;

