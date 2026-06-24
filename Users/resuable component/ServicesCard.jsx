import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="bg-black py-10 space-y-8">
      {services.map((service, index) => (
        <div key={service._id} className="flex justify-center">
          <div
            className={`w-[1000px] h-[420px] border border-purple-400 rounded-[30px] flex items-center px-16 bg-black ${
              index % 2 === 0
                ? "justify-between"
                : "justify-between flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-[320px] h-[320px] rounded-[20px] overflow-hidden">
              <img
                src={service.photo}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-[380px]">
              <h1
                className="text-white text-[72px] italic leading-none mb-6"
                style={{ fontFamily: "serif" }}
              >
                {service.name}
              </h1>

              <p className="text-white text-[20px] leading-8 mb-8">
                {service.description}
              </p>

              <button className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;

// import React from "react";

// const ServicesCard = () => {
//   return (
//     <div className="flex justify-center bg-black py-10">
//       <div className="w-[1000px] h-[420px] border border-purple-400 rounded-[30px] flex items-center justify-between px-16 bg-black">
        
//         {/* Image */}
//         <div className="w-[320px] h-[320px] rounded-[20px] bg-gradient-to-b from-purple-600 to-fuchsia-500"></div>

//         {/* Content */}
//         <div className="w-[380px]">
//           <h1
//             className="text-white text-[72px] italic leading-none mb-6"
//             style={{ fontFamily: "serif" }}
//           >
//             Branding
//           </h1>

//           <p className="text-white text-[20px] leading-8 mb-8">
//             We craft custom websites, branding, and digital strategies to help
//             your business stand out and thrive online.
//           </p>

//           <button className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full">
//             LEARN MORE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesCard;