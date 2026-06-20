import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTestimonial } from "../api/testimonialApi";

const CreateTesti = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    testimonial: "",
    review: "",
    name: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await createTestimonial(formData);

      alert(res.data.message);

      setFormData({
        testimonial: "",
        review: "",
        name: "",
        position: "",
      });

      navigate("/sideBar/testimonial");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const clearForm = () => {
    setFormData({
      testimonial: "",
      review: "",
      name: "",
      position: "",
    });
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-xl mb-10 font-medium">
          New Testimonial
        </h2>

        <div className="mb-6">
          <label className="block mb-2">
            Testimonial
          </label>

          <input
            type="text"
            name="testimonial"
            value={formData.testimonial}
            onChange={handleChange}
            placeholder="Title"
            className="w-full bg-transparent border border-gray-600 rounded-xl px-5 py-4 outline-none"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Review"
            className="w-full h-40 bg-transparent border border-gray-600 rounded-xl px-5 py-4 outline-none resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 mb-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-transparent border border-gray-600 rounded-xl px-5 py-4 outline-none"
          />

          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position / Short Bio"
            className="bg-transparent border border-gray-600 rounded-xl px-5 py-4 outline-none"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={clearForm}
            className="border border-gray-600 px-8 py-3 rounded-full"
          >
            DISCARD
          </button>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full"
          >
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTesti;