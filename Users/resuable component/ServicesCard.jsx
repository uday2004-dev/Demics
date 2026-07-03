import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// const serviceRoutes = {
//   branding: "/branding",
//   marketing: "/marketing",
//   "ad creation": "/adcreation",
//   "web development": "/development",
// };


const serviceRoutes = {
  branding: (id) => `/branding/${id}`,
  "marketing": (id) => `/marketing/${id}`,
  "ad creation": (id) => `/adcreation/${id}`,
  "website": (id) => `/development/${id}`,
  "social media management":(id)=>`/socialmediamanagement/${id}`
};

const ServicesCard = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/services/getAllServices",
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        setServices(res.data.services);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (!services.length) {
    return (
      <div className="text-white text-center py-20">
        Loading services...
      </div>
    );
  }

  return (
    <div className="bg-[#161717] py-10 space-y-10">
      {services.map((service, index) => (
        <div key={service._id} className="flex justify-center px-4">
          <div
            className={`w-full max-w-[1000px] border border-white/30 rounded-[20px] md:rounded-[30px] bg-black flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 lg:px-16 lg:py-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-[320px] flex justify-center">
              <div className="w-[200px] sm:w-[250px] md:w-[320px] h-[200px] sm:h-[250px] md:h-[320px] rounded-[20px] overflow-hidden">
                <img
                  src={service.photo}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-[380px] text-center md:text-left">
              <h1
                className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[72px] italic leading-tight mb-4 md:mb-6"
                style={{ fontFamily: "serif" }}
              >
                {service.name}
              </h1>

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-[20px] leading-6 md:leading-8 mb-6 md:mb-8">
                {service.description}
              </p>

          
          
              <Link
                to={
                  serviceRoutes[service.name.toLowerCase()]
                    ? serviceRoutes[service.name.toLowerCase()](service._id)
                    : "/services"
                }
              >
                <button className="bg-[#8301FE] text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-[#6a00cc] transition">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;