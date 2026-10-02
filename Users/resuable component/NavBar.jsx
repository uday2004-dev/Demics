
// import React, { useEffect, useState } from "react";
// import logo from "../src/assets/demics.png";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/aboutus" },
//     { name: "Services", path: "/services" },
//     { name: "Work", path: "/work" },
//     { name: "Blog", path: "/blogs" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">

//         <div className="flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/">
//             <img
//               src={logo}
//               alt="Demics"
//               className="h-8 sm:h-9 md:h-11 lg:h-12 object-contain"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">

//             {navLinks.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`uppercase text-sm transition ${
//                   location.pathname === item.path
//                     ? "text-white"
//                     : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Contact */}
//           <button
//             onClick={() => navigate("/contact")}
//             className="hidden md:block px-7 py-3 rounded-full text-white text-sm uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] hover:scale-105 transition"
//           >
//             Contact Us
//           </button>

//           {/* Mobile Icon */}
//           <button
//             className="md:hidden text-white text-3xl"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${
//           open
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         } md:hidden`}
//         onClick={() => setOpen(false)}
//       />

//       {/* Mobile Drawer */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-[82%] max-w-[320px]
//         bg-[#171717] z-50
//         transition-transform duration-300
//         ${
//           open
//             ? "translate-x-0"
//             : "translate-x-full"
//         }
//         md:hidden`}
//       >

//         <div className="flex justify-between items-center p-6 border-b border-white/10">

//           <img
//             src={logo}
//             alt="logo"
//             className="h-9"
//           />

//           <button
//             onClick={() => setOpen(false)}
//             className="text-white text-3xl"
//           >
//             <FiX />
//           </button>

//         </div>

//         <div className="flex flex-col p-6 gap-6">

//           {navLinks.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               onClick={() => setOpen(false)}
//               className={`text-lg transition ${
//                 location.pathname === item.path
//                   ? "text-[#B84DFF]"
//                   : "text-white"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           <button
//             onClick={() => {
//               navigate("/contact");
//               setOpen(false);
//             }}
//             className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white uppercase"
//           >
//             Contact Us
//           </button>

//         </div>

//       </div>
//     </header>
//   );
// };

// export default NavBar;



import React, { useEffect, useState } from "react";
// import logo from "../src/assets/demics.png";
import logo from "../src/assets/demicsLogo-cropped.png"
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "motion/react";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blogs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* ================= NAVBAR ================= */}

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="bg-[#111111]/90 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">

          <div className="flex items-center justify-between">

            {/* ================= LOGO ================= */}


            {/* ye purane wale logo ka hai aage kaam if in case  */}

            {/* <Link to="/">
              <motion.img
                src={logo}
                alt="Demics"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="h-8 sm:h-9 md:h-11 lg:h-12 object-contain"
               
              />
            </Link> */}

            {/* <Link to="/" className="inline-flex items-center">
  <motion.img
    src={logo}
    alt="Demics"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: 0.2,
      duration: 0.6,
    }}
    whileHover={{
      scale: 1.05,
    }}
    // className="h-9 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
        className="h-12 sm:h-12 md:h-12 lg:h-18 w-auto object-contain"

  />
  
</Link> */}
   

   <Link to="/" className="inline-flex items-center">
  <motion.img
    src={logo}
    alt="Demics"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      delay: 0.2,
      duration: 0.6,
    }}
    whileHover={{
      scale: 1.05,
    }}
    className="h-12 md:h-12 lg:h-[72px] w-auto object-contain"
  />
</Link>
          


            {/* ================= DESKTOP MENU ================= */}

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="
                hidden md:flex
                items-center
                gap-8
                px-8
                py-4
                rounded-full
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
              "
            >

              {navLinks.map((item, index) => (

                <motion.div
                  key={item.path}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4 + index * 0.08,
                    duration: 0.4,
                  }}
                >

                  <Link
                    to={item.path}
                    className={`
                      relative
                      uppercase
                      text-sm
                      transition-colors
                      duration-300
                      group
                      ${
                        location.pathname === item.path
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      }
                    `}
                  >

                    {item.name}

                    {/* Animated underline */}

                    <span
                      className={`
                        absolute
                        left-0
                        -bottom-2
                        h-[1px]
                        bg-[#B84DFF]
                        transition-all
                        duration-300
                        ${
                          location.pathname === item.path
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />

                  </Link>

                </motion.div>

              ))}

            </motion.div>


            {/* ================= CONTACT ================= */}

            <motion.button
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(184,77,255,0.35)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate("/contact")}
              className="
                hidden
                md:block
                px-7
                py-3
                rounded-full
                text-white
                text-sm
                uppercase
                bg-gradient-to-r
                from-[#B84DFF]
                to-[#7A00FF]
              "
            >
              Contact Us
            </motion.button>


            {/* ================= MOBILE ICON ================= */}

            <motion.button
              whileTap={{ scale: 0.85 }}
              className="md:hidden text-white text-3xl"
              onClick={() => setOpen(!open)}
            >
              <AnimatePresence mode="wait">

                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu />
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.button>

          </div>
        </div>
      </motion.div>


      {/* ================= MOBILE OVERLAY ================= */}

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              bg-black/60
              backdrop-blur-sm
              md:hidden
            "
            onClick={() => setOpen(false)}
          />
        )}

      </AnimatePresence>


      {/* ================= MOBILE DRAWER ================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              top-0
              right-0
              h-screen
              w-[82%]
              max-w-[320px]
              bg-[#171717]
              z-50
              md:hidden
              shadow-2xl
            "
          >

            {/* Drawer Header */}

            <div className="
              flex
              justify-between
              items-center
              p-6
              border-b
              border-white/10
            ">

              <motion.img
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                src={logo}
                alt="logo"
                className="h-9"
              />

              <motion.button
                whileHover={{
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.8,
                }}
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
              >
                <FiX />
              </motion.button>

            </div>


            {/* Mobile Links */}

            <div className="flex flex-col p-6 gap-6">

              {navLinks.map((item, index) => (

                <motion.div
                  key={item.path}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.15 + index * 0.08,
                    duration: 0.4,
                  }}
                >

                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`
                      text-lg
                      transition-colors
                      duration-300
                      ${
                        location.pathname === item.path
                          ? "text-[#B84DFF]"
                          : "text-white"
                      }
                    `}
                  >
                    {item.name}
                  </Link>

                </motion.div>

              ))}


              {/* Mobile Contact */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.6,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => {
                  navigate("/contact");
                  setOpen(false);
                }}
                className="
                  mt-4
                  w-full
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#B84DFF]
                  to-[#7A00FF]
                  text-white
                  uppercase
                "
              >
                Contact Us
              </motion.button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
};

export default NavBar;