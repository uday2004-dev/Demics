import React, { useState } from "react";
// import { createTeam } from "../api/teamApi.js";
import { createTeam } from "../api/team";
import { useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";

const TeamCreate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    profileLink: "",
  });

  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("designation", formData.designation);
      data.append("profileLink", formData.profileLink);

      if (photo) {
        data.append("photo", photo);
      }

      const res = await createTeam(data);

      alert(res.data.message);

      setFormData({
        name: "",
        designation: "",
        profileLink: "",
      });

      setPhoto(null);

      navigate("/sideBar/team");
    } catch (error) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md"
      >
        <h2 className="text-xl mb-10">
          Adding New Team Member
        </h2>

        {/* Image Upload */}
        <label
          htmlFor="photo"
          className="w-60 h-60 rounded-xl bg-purple-600 flex items-center justify-center cursor-pointer overflow-hidden"
        >
          {photo ? (
            <img
              src={URL.createObjectURL(photo)}
              alt="preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <GrGallery size={50} />
          )}
        </label>

        <input
          type="file"
          id="photo"
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setPhoto(e.target.files[0])
          }
        />

        {/* Name */}
        <div className="mt-6">
          <label className="block mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter here"
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
          />
        </div>

        {/* Designation */}
        <div className="mt-6">
          <label className="block mb-2">
            Designation
          </label>

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter here"
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
          />
        </div>

        {/* Linkedin */}
        <div className="mt-6">
          <label className="block mb-2">
            LinkedIn Url
          </label>

          <input
            type="text"
            name="profileLink"
            value={formData.profileLink}
            onChange={handleChange}
            placeholder="Enter here"
            className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full"
          >
            ADD
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/sideBar/team")
            }
            className="border border-gray-500 px-8 py-3 rounded-full"
          >
            DISCARD
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamCreate;