// import React from "react";
// import logo from "../src/assets/demics.png";
// import { Link, useNavigate } from "react-router-dom";

// const NavBar = () => {
//   const navigate=useNavigate()
//   return (
//     <header className="w-full fixed top-0  left-0 z-50 bg-[#111111]">
//       <div className="max-w-7xl mx-auto px-8 py-8">
//         <div className="flex items-center justify-between">
//           <img
//             src={logo}
//             alt="Demics"
//             className="h-12 object-contain"
//           />

//           <div className="hidden md:flex items-center">
//             <div className="flex items-center gap-10 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-lg">
//               <Link
//                 to="/"
//                 className="text-white text-sm uppercase font-medium"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/aboutus"
//                 className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
//               >
//                 About Us
//               </Link>

//               <Link
//                 to="/services"
//                 className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
//               >
//                 Services
//               </Link>

//               <Link
//                 to="/work"
//                 className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
//               >
//                 Work
//               </Link>

//               <Link
//                 to="/blogs"
//                 className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
//               >
//                 Blog
//               </Link>
//             </div>
//           </div>

//           <button onClick={()=>navigate("/contact")} className="px-8 py-4 rounded-full text-white text-sm font-medium uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NavBar;


import React, { useState } from "react";
import logo from "../src/assets/demics.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#111111]">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 md:py-8">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <img
            src={logo}
            alt="Demics"
            className="h-8 md:h-12 object-contain"
          />

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-10 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-lg">

              <Link to="/" className="text-white text-sm uppercase font-medium">
                Home
              </Link>

              <Link to="/aboutus" className="text-white/80 hover:text-white text-sm uppercase font-medium">
                About Us
              </Link>

              <Link to="/services" className="text-white/80 hover:text-white text-sm uppercase font-medium">
                Services
              </Link>

              <Link to="/work" className="text-white/80 hover:text-white text-sm uppercase font-medium">
                Work
              </Link>

              <Link to="/blogs" className="text-white/80 hover:text-white text-sm uppercase font-medium">
                Blog
              </Link>

            </div>
          </div>

          {/* CONTACT BUTTON (desktop only style adjust) */}
          <button
            onClick={() => navigate("/contact")}
            className="hidden md:block px-8 py-4 rounded-full text-white text-sm font-medium uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            Contact Us
          </button>

          {/* HAMBURGER (mobile) */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden mt-4 bg-[#1a1a1a] rounded-xl p-6 space-y-4">

            <Link onClick={() => setOpen(false)} to="/" className="block text-white">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} to="/aboutus" className="block text-white/80">
              About Us
            </Link>

            <Link onClick={() => setOpen(false)} to="/services" className="block text-white/80">
              Services
            </Link>

            <Link onClick={() => setOpen(false)} to="/work" className="block text-white/80">
              Work
            </Link>

            <Link onClick={() => setOpen(false)} to="/blogs" className="block text-white/80">
              Blog
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                navigate("/contact");
              }}
              className="w-full mt-4 px-6 py-3 rounded-full text-white text-sm font-medium uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF]"
            >
              Contact Us
            </button>

          </div>
        )}

      </div>
    </header>
  );
};

export default NavBar;