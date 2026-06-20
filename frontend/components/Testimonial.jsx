import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTestimonial } from "../api/testimonialApi";

const Testimonial = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const res = await getTestimonial();
      setTestimonials(res.data.testimonials || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">
          Testimonials
        </h1>

        <button
          onClick={() =>
            navigate(
              "/sideBar/testimonial/createTestimonial"
            )
          }
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg"
        >
          + Add Testimonial
        </button>
      </div>

      {testimonials.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          No Testimonials Found
        </div>
      ) : (
        <div className="grid gap-5">
          {testimonials.map((item) => (
            <div
              key={item._id}
              className="border border-gray-700 rounded-xl p-5"
            >
              <h2 className="text-xl font-semibold">
                {item.testimonial}
              </h2>

              <p className="text-gray-300 mt-3">
                {item.review}
              </p>

              <div className="mt-4">
                <p className="font-medium">
                  {item.name}
                </p>

                <p className="text-sm text-gray-400">
                  {item.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonial;