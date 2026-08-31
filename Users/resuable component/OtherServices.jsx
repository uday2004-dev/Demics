// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import api from "../utls/axios";

// const serviceRoutes = {
//   branding: (id) => `/branding/${id}`,
//   marketing: (id) => `/marketing/${id}`,
//   "social media management": (id) => `/socialmediamanagement/${id}`,
//   "ad creation": (id) => `/adcreation/${id}`,
//   website: (id) => `/development/${id}`,
// };

// const OtherServices = () => {
//   const { id } = useParams();
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetchServices();
//   }, [id]);

//   const fetchServices = async () => {
//     try {
//       const res = await api.get("/api/services/getAllServices", {
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         const filteredServices = res.data.services.filter(
//           (service) => service._id !== id
//         );

//         setServices(filteredServices);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!services.length) {
//     return (
//       <section className="py-16 sm:py-20 lg:py-28 bg-[#111111]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2
//             className="text-white italic text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-16"
//             style={{ fontFamily: "serif" }}
//           >
//             Other Services
//           </h2>

//           <div className="text-white text-center py-10 text-base sm:text-lg">
//             No other services found.
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-16 sm:py-20 lg:py-28 bg-[#111111]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="mb-10 md:mb-16">
//           <h2
//             className="
//               text-white
//               italic
//               text-center
//               md:text-left
//               text-3xl
//               min-[375px]:text-4xl
//               md:text-5xl
//               lg:text-6xl
//             "
//             style={{ fontFamily: "serif" }}
//           >
//             Other Services
//           </h2>
//         </div>

//         <div className="space-y-8 md:space-y-10">
//           {services.map((service, index) => (
//             <div key={service._id} className="flex justify-center">
//               <div
//                 className={`
//                   w-full
//                   max-w-[1100px]
//                   border
//                   border-white/20
//                   rounded-[22px]
//                   md:rounded-[30px]
//                   bg-[#111111]
//                   flex
//                   flex-col
//                   md:flex-row
//                   items-center
//                   gap-6
//                   md:gap-10
//                   lg:gap-12
//                   p-5
//                   sm:p-6
//                   md:p-8
//                   lg:px-14
//                   lg:py-12
//                   ${
//                     index % 2 !== 0
//                       ? "md:flex-row-reverse"
//                       : ""
//                   }
//                 `}
//               >
//                 {/* IMAGE */}
//                 <div className="w-full md:w-[40%] flex justify-center">
//                   <div
//                     className="
//                       w-full
//                       max-w-[290px]
//                       h-[220px]

//                       min-[375px]:max-w-[320px]
//                       min-[375px]:h-[240px]

//                       sm:w-[240px]
//                       sm:h-[240px]

//                       md:w-[280px]
//                       md:h-[280px]

//                       lg:w-[320px]
//                       lg:h-[320px]

//                       rounded-[20px]
//                       overflow-hidden
//                     "
//                   >
//                     <img
//                       src={service.photo}
//                       alt={service.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </div>

//                 {/* CONTENT */}
//                 <div className="flex-1 text-left">
//                   <h1
//                     className="
//                       text-white
//                       italic
//                       leading-tight
//                       mb-4

//                       text-[30px]
//                       min-[375px]:text-[34px]

//                       sm:text-5xl
//                       md:text-6xl
//                       lg:text-7xl
//                     "
//                     style={{ fontFamily: "serif" }}
//                   >
//                     {service.name}
//                   </h1>

//                   <p
//                     className="
//                       text-white/90
//                       text-[14px]
//                       min-[375px]:text-[15px]
//                       sm:text-base
//                       lg:text-lg
//                       leading-7
//                       lg:leading-8
//                       mb-6
//                       lg:mb-8
//                     "
//                   >
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
//                     <button
//                       className="
//                         bg-[#8301FE]
//                         hover:bg-[#6a00cc]
//                         transition-all
//                         duration-300
//                         text-white
//                         rounded-full
//                         px-6
//                         py-2.5
//                         sm:px-8
//                         sm:py-3
//                         text-sm
//                         sm:text-base
//                         font-medium
//                       "
//                     >
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
import { Link, useParams } from "react-router-dom";
import api from "../utls/axios";

const serviceRoutes = {
  branding: (id) => `/branding/${id}`,
  marketing: (id) => `/marketing/${id}`,
  "social media management": (id) =>
    `/socialmediamanagement/${id}`,
  "ad creation": (id) => `/adcreation/${id}`,
  website: (id) => `/development/${id}`,
};

const OtherServices = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, [id]);

  const fetchServices = async () => {
    try {
      const res = await api.get(
        "/api/services/getAllServices"
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
      <section className="py-16 sm:py-20 lg:py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2
            className="
              text-white
              italic
              text-center
              md:text-left
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              mb-10
              md:mb-16
            "
            style={{ fontFamily: "serif" }}
          >
            Other Services
          </h2>

          <div className="text-white text-center py-10 text-base sm:text-lg">
            No other services found.
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#111111]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 md:mb-16">

          <h2
            className="
              text-white
              italic
              text-center
              md:text-left
              text-3xl
              min-[375px]:text-4xl
              md:text-5xl
              lg:text-6xl
            "
            style={{ fontFamily: "serif" }}
          >
            Other Services
          </h2>

        </div>

        {/* Services */}
        <div className="space-y-8 md:space-y-10">

          {services.map((service, index) => (

            <div
              key={service._id}
              className="flex justify-center"
            >

              {/* OUTER CARD */}
              <div
                className={`
                  w-full
                  max-w-[1100px]

                  rounded-[22px]
                  md:rounded-[30px]

                  bg-[#111111]

                  border
                  border-purple-400/70

                  shadow-[0_0_8px_rgba(168,85,247,0.75),0_0_20px_rgba(168,85,247,0.45),0_0_35px_rgba(168,85,247,0.25)]

                  hover:border-purple-400
                  hover:shadow-[0_0_10px_rgba(168,85,247,0.95),0_0_25px_rgba(168,85,247,0.70),0_0_45px_rgba(168,85,247,0.45)]

                  transition-all
                  duration-300

                  flex
                  flex-col
                  md:flex-row
                  items-center

                  gap-6
                  md:gap-10
                  lg:gap-12

                  p-5
                  sm:p-6
                  md:p-8
                  lg:px-14
                  lg:py-12

                  ${
                    index % 2 !== 0
                      ? "md:flex-row-reverse"
                      : ""
                  }
                `}
              >

                {/* IMAGE */}
                <div className="w-full md:w-[40%] flex justify-center">

                  {/* <div
                    className="
                      w-full
                      max-w-[290px]
                      h-[220px]

                      min-[375px]:max-w-[320px]
                      min-[375px]:h-[240px]

                      sm:w-[240px]
                      sm:h-[240px]

                      md:w-[280px]
                      md:h-[280px]

                      lg:w-[320px]
                      lg:h-[320px]

                      rounded-[20px]
                      overflow-hidden
                    "
                  >

                    <img
                      src={service.photo}
                      alt={service.name}
                      className="
                        w-full
                        h-full
                        object-cover
                      "
                    />

                  </div> */}

<div
  className="
    w-full
    max-w-[290px]
    h-[220px]

    min-[375px]:max-w-[320px]
    min-[375px]:h-[240px]

    sm:w-[240px]
    sm:h-[240px]

    md:w-[280px]
    md:h-[280px]

    lg:w-[320px]
    lg:h-[320px]

    rounded-[20px]
    overflow-hidden

    border-none

    shadow-[
      0_0_20px_rgba(168,85,247,0.8),
      0_0_45px_rgba(168,85,247,0.6),
      0_0_80px_rgba(168,85,247,0.4)
    ]

    transition-all
    duration-500

    hover:shadow-[
      0_0_25px_rgba(168,85,247,0.95),
      0_0_55px_rgba(168,85,247,0.75),
      0_0_100px_rgba(168,85,247,0.5)
    ]
  "
>
  <img
    src={service.photo}
    alt={service.name}
    className="
      w-full
      h-full
      object-cover
    "
  />
</div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 text-left">

                  <h1
                    className="
                      text-white
                      italic
                      leading-tight
                      mb-4

                      text-[30px]
                      min-[375px]:text-[34px]

                      sm:text-5xl
                      md:text-6xl
                      lg:text-7xl
                    "
                    style={{ fontFamily: "serif" }}
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

                  {/* Learn More */}
                  <Link
                    to={
                      serviceRoutes[
                        service.name.toLowerCase()
                      ]
                        ? serviceRoutes[
                            service.name.toLowerCase()
                          ](service._id)
                        : "/services"
                    }
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

                        cursor-pointer
                      "
                    >
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