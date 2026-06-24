
import React, { useState } from "react";
import { createService } from "../api/servicesApi";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const [service, setService] = useState({
    name: "",
    description: "",
  });

  const [servicePic, setServicePic] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const createServices = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("name", service.name);
      data.append("description", service.description);

      if (servicePic) {
        data.append("photo", servicePic);
      }

      const res = await createService(data);

      alert(res.data.message);

      setService({
        name: "",
        description: "",
      });

      setServicePic(null);

      navigate("/sideBar/services");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={createServices}
        className="flex flex-col gap-4 p-6 bg-[#1E1E1E] rounded-lg w-[500px]"
      >
        <h2 className="text-white text-2xl font-semibold">
          Create Service
        </h2>

        <input
          type="text"
          name="name"
          value={service.name}
          onChange={handleChange}
          placeholder="Service Name"
          className="border border-gray-600 bg-transparent text-white p-3 rounded outline-none"
          required
        />

        <textarea
          name="description"
          value={service.description}
          onChange={handleChange}
          placeholder="Service Description"
          rows="5"
          className="border border-gray-600 bg-transparent text-white p-3 rounded outline-none resize-none"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setServicePic(e.target.files[0])}
          className="text-white"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded transition"
        >
          {loading ? "Creating..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default Services;
