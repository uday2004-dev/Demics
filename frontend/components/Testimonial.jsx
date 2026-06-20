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
    <div className="bg-black min-h-screen text-white px-8 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">
          Testimonials
        </h1>

        <button
          onClick={() =>
            navigate(
              "/sideBar/testimonial/createTestimonial"
            )
          }
          className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-medium"
        >
          + Add Testimonial
        </button>
      </div>

      {/* Empty State */}
      {testimonials.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-400 text-lg">
            No Testimonials Found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item._id}
              className="bg-[#111111] border border-gray-700 rounded-[30px] p-10 min-h-[340px] flex flex-col justify-between"
            >
              {/* Content */}
              <div>
                <h2 className="text-3xl font-medium text-purple-300 leading-snug mb-8">
                  {item.testimonial}
                </h2>

                <p className="text-gray-300 text-lg leading-8">
                  {item.review}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-10">
                <h3 className="text-purple-300 text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-lg mt-1">
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