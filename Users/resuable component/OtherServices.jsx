// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useParams } from "react-router-dom";

// const serviceRoutes = {
//   branding: (id) => `/branding/${id}`,
//   marketing: (id) => `/marketing/${id}`,
//   "ad creation": (id) => `/adcreation/${id}`,
//   "web development": (id) => `/development/${id}`,
// };

// const OtherServices = () => {
//   const { id } = useParams();
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/services/getAllServices",
//         {
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         const filtered = res.data.services.filter(
//           (service) => service._id !== id
//         );

//         setServices(filtered);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <section className="py-24 bg-[#111111]">
//       <div className="max-w-7xl mx-auto px-8">
//         <h2
//           className="text-white text-5xl md:text-6xl italic mb-16"
//           style={{ fontFamily: "serif" }}
//         >
//           Other Services
//         </h2>

//         <div className="space-y-10">
//           {services.map((service, index) => (
//             <div
//               key={service._id}
//               className="flex justify-center"
//             >
//               <div
//                 className={`w-full max-w-[1000px] border border-white/20 rounded-[30px] bg-black flex flex-col md:flex-row items-center gap-10 p-8 lg:p-12 ${
//                   index % 2 !== 0 ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Image */}
//                 <div className="w-full md:w-[320px] flex justify-center">
//                   <img
//                     src={service.photo}
//                     alt={service.name}
//                     className="w-[280px] h-[280px] object-cover rounded-2xl"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="w-full md:w-[420px] text-center md:text-left">
//                   <h3
//                     className="text-white text-5xl italic mb-6"
//                     style={{ fontFamily: "serif" }}
//                   >
//                     {service.name}
//                   </h3>

//                   <p className="text-gray-300 leading-8 mb-8">
//                     {service.description}
//                   </p>

//                   <Link
//                     to={
//                       serviceRoutes[service.name.toLowerCase()]
//                         ? serviceRoutes[service.name.toLowerCase()](
//                             service._id
//                           )
//                         : "/services"
//                     }
//                   >
//                     <button className="bg-[#8301FE] hover:bg-[#6d00d4] transition text-white px-8 py-3 rounded-full">
//                       LEARN MORE
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OtherServices;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const serviceRoutes = {
  branding: (id) => `/branding/${id}`,
  marketing: (id) => `/marketing/${id}`,
  "ad creation": (id) => `/adcreation/${id}`,
  "web development": (id) => `/development/${id}`,
};

const OtherServices = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, [id]);

  const fetchServices = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/services/getAllServices",
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        const filteredServices = res.data.services.filter(
          (service) => service._id !== id
        );

        setServices(filteredServices);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!services.length) {
    return (
      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <h2
            className="text-5xl md:text-6xl italic text-white mb-16"
            style={{ fontFamily: "serif" }}
          >
            Other Services
          </h2>

          <div className="text-white text-center py-10">
            No other services found.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="mb-16">
          <h2
            className="text-5xl md:text-6xl italic text-white"
            style={{ fontFamily: "serif" }}
          >
            Other Services
          </h2>
        </div>

        <div className="space-y-10">
          {services.map((service, index) => (
            <div key={service._id} className="flex justify-center">
              <div
                className={`w-full max-w-[1000px] border border-white/30 rounded-[20px] md:rounded-[30px] bg-black flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 lg:px-16 lg:py-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
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
                        ? serviceRoutes[service.name.toLowerCase()](
                            service._id
                          )
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
      </div>
    </section>
  );
};

export default OtherServices;