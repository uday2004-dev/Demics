// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../utls/axios";

// const serviceRoutes = {
//   branding: (id) => `/branding/${id}`,
//   marketing: (id) => `/marketing/${id}`,
//   "social media management": (id) => `/socialmediamanagement/${id}`,
//   "ad creation": (id) => `/adcreation/${id}`,
//   website: (id) => `/development/${id}`,
// };

// const ServicesCard = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchServices = async () => {
//     try {
//       const res = await api.get("/api/services/getAllServices", {
//         withCredentials: true,
//       });

//       if (res.data.success) {
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
//       <div className="text-white text-center py-20 text-lg sm:text-xl">
//         Loading Services...
//       </div>
//     );
//   }

//   return (
//     <section className="py-8 sm:py-10">
//       <div className="space-y-8 md:space-y-10">
//         {services.map((service, index) => {
//           const serviceKey = service.name?.trim().toLowerCase();

//           const route = serviceRoutes[serviceKey]
//             ? serviceRoutes[serviceKey](service._id)
//             : "/services";

//           return (
//             <div key={service._id} className="flex justify-center px-3 sm:px-4">
//               <div
//                 // className={`
//                 //   w-full
//                 //   max-w-[1100px]
//                 //   border border-white/20
//                 //   rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]
//                 //   bg-[#111111]
//                 //   flex flex-col
//                 //   md:flex-row
//                 //   items-center
//                 //   gap-6
//                 //   sm:gap-8
//                 //   lg:gap-12
//                 //   p-5
//                 //   sm:p-6
//                 //   md:p-8
//                 //   lg:px-14
//                 //   lg:py-12
//                 //   ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
//                 // `}

//                  className={`
//     w-full
//                   max-w-[1100px]

//                   rounded-[22px]
//                   md:rounded-[30px]

//                   bg-[#111111]

//                   border
//                   border-purple-400/70

//                   shadow-[0_0_8px_rgba(168,85,247,0.75),0_0_20px_rgba(168,85,247,0.45),0_0_35px_rgba(168,85,247,0.25)]

//                   hover:border-purple-400
//                   hover:shadow-[0_0_10px_rgba(168,85,247,0.95),0_0_25px_rgba(168,85,247,0.70),0_0_45px_rgba(168,85,247,0.45)]

//                   transition-all
//                   duration-300

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


//     ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
//   `}
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

//                       sm:w-[250px]
//                       sm:h-[250px]

//                       md:w-[280px]
//                       md:h-[280px]

//                       lg:w-[320px]
//                       lg:h-[320px]

//                       rounded-[18px]
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
//                       font-awesome
//                       leading-tight
//                       mb-4
//                       text-[30px]
//                       min-[375px]:text-[34px]
//                       sm:text-5xl
//                       md:text-6xl
//                       lg:text-7xl
//                     "
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

//                   <Link to={route}>
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
import { motion } from "motion/react";

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
      const res = await api.get("/api/services/getAllServices", {
        withCredentials: true,
      });

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
            <motion.div
              key={service._id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex justify-center px-3 sm:px-4"
            >

              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className={`
                  group
                  relative
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
                  duration-500

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

                  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                `}
              >

                {/* PURPLE HOVER GLOW */}

                <div
                  className="
                    absolute
                    w-[250px]
                    h-[250px]
                    rounded-full
                    bg-purple-600/20
                    blur-[100px]
                    -top-24
                    -right-24
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-700
                    pointer-events-none
                  "
                />

                {/* IMAGE */}

                <motion.div
                  className="
                    relative
                    z-10
                    w-full
                    md:w-[40%]
                    flex
                    justify-center
                    overflow-hidden
                    rounded-[18px]
                  "
                >

                  <motion.div
                    whileHover={{
                      scale: 1.06,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="
                      w-full
                      max-w-[290px]
                      h-[220px]

                      min-[375px]:max-w-[320px]
                      min-[375px]:h-[240px]

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
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </motion.div>

                </motion.div>


                {/* CONTENT */}

                <div className="relative z-10 flex-1 text-left">

                  {/* TITLE */}

                  <motion.h1
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + index * 0.12,
                    }}
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
                  >
                    {service.name}
                  </motion.h1>


                  {/* DESCRIPTION */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.35 + index * 0.12,
                    }}
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
                  </motion.p>


                  {/* BUTTON */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.45 + index * 0.12,
                    }}
                  >

                    <Link to={route}>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            "0 0 25px rgba(131,1,254,0.55)",
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
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
                      </motion.button>

                    </Link>

                  </motion.div>

                </div>

              </motion.div>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default ServicesCard;