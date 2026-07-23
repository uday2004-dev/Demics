// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const serviceRoutes = {
//   branding: (id) => `/branding/${id}`,
//   marketing: (id) => `/marketing/${id}`,
//   "social media management": (id) => `/socialmediamanagement/${id}`,
//   "ad creation": (id) => `/adcreation/${id}`,
//   website: (id) => `/development/${id}`, // ✅
// };

// const ServicesCard = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchServices = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:3000/api/services/getAllServices",
//         {
//           withCredentials: true,
//         }
//       );

//       if (res.data.success) {
//         console.log("Services:", res.data.services);
//         setServices(res.data.services);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-white text-center py-20 text-xl">
//         Loading Services...
//       </div>
//     );
//   }
//   // console.log("Services:", res.data.services);
//   return (
//     <section className="py-10">

//       <div className="space-y-8 lg:space-y-10">
//         {services.map((service, index) => {
//           const serviceKey = service.name?.trim().toLowerCase();

//           console.log("Service Name:", service.name);
//           console.log("Service Key:", serviceKey);


//           console.log({
//             name: service.name,
//             key: serviceKey,
//             route: serviceRoutes[serviceKey]
//               ? serviceRoutes[serviceKey](service._id)
//               : "/services",
//           });
//           const route = serviceRoutes[serviceKey]
//             ? serviceRoutes[serviceKey](service._id)
//             : "/services";

//           if (!serviceRoutes[serviceKey]) {
//             console.warn(
//               `"${service.name}" ka route serviceRoutes me nahi mila`
//             );
//           }

//           return (
//             <div key={service._id} className="flex justify-center px-4">
//               <div
//                 className={`w-full max-w-[1000px]
//                 border border-white/30
//                 rounded-[30px]
//                 bg-black
//                 flex flex-col
//                 md:flex-row
//                 items-center
//                 gap-8
//                 p-6
//                 md:p-8
//                 lg:px-16
//                 lg:py-12
//                 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
//                   }`}
//               >
//                 {/* IMAGE */}
//                 <div className="w-full md:w-[320px] flex justify-center">
//                   <div className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-[20px] overflow-hidden">
//                     <img
//                       src={service.photo}
//                       alt={service.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="flex-1 text-center md:text-left">
//                   <h1
//                     className="text-white italic leading-tight mb-4 text-4xl md:text-6xl lg:text-7xl"
//                     style={{ fontFamily: "serif" }}
//                   >
//                     {service.name}
//                   </h1>

//                   <p className="text-white text-base lg:text-xl leading-8 mb-8">
//                     {service.description}
//                   </p>

//                   <Link to={route}
//                     onClick={() => {
//                       console.log("================================");
//                       console.log("Clicked:", service.name);
//                       console.log("ID:", service._id);
//                       console.log("Key:", serviceKey);
//                       console.log("Route:", route);
//                       console.log("================================");
//                     }}
//                   >
//                     <button className="bg-[#8301FE] hover:bg-[#6a00cc] transition-all duration-300 text-white rounded-full px-8 py-3">
//                       LEARN MORE
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ServicesCard;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utls/axios"; 

const serviceRoutes = {
  branding: (id) => `/branding/${id}`,
  marketing: (id) => `/marketing/${id}`,
  "social media management": (id) => `/socialmediamanagement/${id}`,
  "ad creation": (id) => `/adcreation/${id}`,
  website: (id) => `/development/${id}`,
};

const ServicesCard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);



  const fetchServices = async () => {
  try {
    const res = await api.get("/api/services/getAllServices",
        {
          withCredentials: true,
        }
    );

    if (res.data.success) {
      setServices(res.data.services);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center py-20 text-lg sm:text-xl">
        Loading Services...
      </div>
    );
  }

  return (
    <section className="py-8 sm:py-10">
      <div className="space-y-8 md:space-y-10">
        {services.map((service, index) => {
          const serviceKey = service.name?.trim().toLowerCase();

          const route = serviceRoutes[serviceKey]
            ? serviceRoutes[serviceKey](service._id)
            : "/services";

          return (
            <div key={service._id} className="flex justify-center px-3 sm:px-4">
              <div
                className={`
                  w-full max-w-[1100px]
                  border border-white/20
                  rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]
                  bg-[#111111]
                  flex flex-col
                  md:flex-row
                  items-center
                  gap-6 sm:gap-8 lg:gap-12
                  p-5
                  sm:p-6
                  md:p-8
                  lg:px-14
                  lg:py-12
                  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                `}
              >
                {/* IMAGE */}
                <div className="w-full md:w-[40%] flex justify-center">
                  <div
                    className="
                      w-[180px]
                      h-[180px]
                      min-[375px]:w-[210px]
                      min-[375px]:h-[210px]
                      sm:w-[250px]
                      sm:h-[250px]
                      md:w-[280px]
                      md:h-[280px]
                      lg:w-[320px]
                      lg:h-[320px]
                      rounded-[18px]
                      overflow-hidden
                    "
                  >
                    <img
                      src={service.photo}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 text-center md:text-left">
                  <h1
                    className="
                      text-white
                      font-awesome
                      leading-tight
                      mb-4
                      text-[30px]
                      min-[375px]:text-[34px]
                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                    "
                    // style={{ fontFamily: "serif" }}
                  >
                    {service.name}
                  </h1>

                  <p
                    className="
                      text-white/90
                      text-[14px]
                      min-[375px]:text-[15px]
                      sm:text-base
                      lg:text-lg
                      leading-7
                      lg:leading-8
                      mb-6
                      lg:mb-8
                    "
                  >
                    {service.description}
                  </p>

                  <Link
                    to={route}
                  >
                    <button
                      className="
                        bg-[#8301FE]
                        hover:bg-[#6a00cc]
                        transition-all
                        duration-300
                        text-white
                        rounded-full
                        px-6
                        py-2.5
                        sm:px-8
                        sm:py-3
                        text-sm
                        sm:text-base
                        font-medium
                      "
                    >
                      LEARN MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesCard;