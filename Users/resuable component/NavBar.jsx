


// import React, { useState } from "react";
// import logo from "../src/assets/demics.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";

// const NavBar = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full fixed top-0 left-0 z-50 bg-[#111111]">

//       <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-8">

//         <div className="flex items-center justify-between">

//           {/* LOGO */}
//           <img
//             src={logo}
//             alt="Demics"
//             className="h-8 md:h-12 object-contain"
//           />

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center">
//             <div className="flex items-center gap-10 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-lg">

//               <Link to="/" className="text-white text-sm uppercase font-medium">
//                 Home
//               </Link>

//               <Link to="/aboutus" className="text-white/80 hover:text-white text-sm uppercase font-medium">
//                 About Us
//               </Link>

//               <Link to="/services" className="text-white/80 hover:text-white text-sm uppercase font-medium">
//                 Services
//               </Link>

//               <Link to="/work" className="text-white/80 hover:text-white text-sm uppercase font-medium">
//                 Work
//               </Link>

//               <Link to="/blogs" className="text-white/80 hover:text-white text-sm uppercase font-medium">
//                 Blog
//               </Link>

//             </div>
//           </div>

//           {/* CONTACT BUTTON (desktop only style adjust) */}
//           <button
//             onClick={() => navigate("/contact")}
//             className="hidden md:block px-8 py-4 rounded-full text-white text-sm font-medium uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
//           >
//             Contact Us
//           </button>

//           {/* HAMBURGER (mobile) */}
//           <button
//             className="md:hidden text-white text-2xl"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <FiX /> : <FiMenu />}
//           </button>

//         </div>

//         {/* MOBILE MENU */}
//         {open && (
//           <div className="md:hidden mt-4 bg-[#1a1a1a] rounded-xl p-6 space-y-4">

//             <Link onClick={() => setOpen(false)} to="/" className="block text-white">
//               Home
//             </Link>

//             <Link onClick={() => setOpen(false)} to="/aboutus" className="block text-white/80">
//               About Us
//             </Link>

//             <Link onClick={() => setOpen(false)} to="/services" className="block text-white/80">
//               Services
//             </Link>

//             <Link onClick={() => setOpen(false)} to="/work" className="block text-white/80">
//               Work
//             </Link>

//             <Link onClick={() => setOpen(false)} to="/blogs" className="block text-white/80">
//               Blog
//             </Link>

//             <button
//               onClick={() => {
//                 setOpen(false);
//                 navigate("/contact");
//               }}
//               className="w-full mt-4 px-6 py-3 rounded-full text-white text-sm font-medium uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF]"
//             >
//               Contact Us
//             </button>

//           </div>
//         )}

//       </div>
//     </header>
//   );
// };

// export default NavBar;


import React, { useEffect, useState } from "react";
import logo from "../src/assets/demics.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blogs" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/">
            <img
              src={logo}
              alt="Demics"
              className="h-8 sm:h-9 md:h-11 lg:h-12 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`uppercase text-sm transition ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <button
            onClick={() => navigate("/contact")}
            className="hidden md:block px-7 py-3 rounded-full text-white text-sm uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] hover:scale-105 transition"
          >
            Contact Us
          </button>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[82%] max-w-[320px]
        bg-[#171717] z-50
        transition-transform duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
        md:hidden`}
      >

        <div className="flex justify-between items-center p-6 border-b border-white/10">

          <img
            src={logo}
            alt="logo"
            className="h-9"
          />

          <button
            onClick={() => setOpen(false)}
            className="text-white text-3xl"
          >
            <FiX />
          </button>

        </div>

        <div className="flex flex-col p-6 gap-6">

          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-lg transition ${
                location.pathname === item.path
                  ? "text-[#B84DFF]"
                  : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <button
            onClick={() => {
              navigate("/contact");
              setOpen(false);
            }}
            className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white uppercase"
          >
            Contact Us
          </button>

        </div>

      </div>
    </header>
  );
};

export default NavBar;