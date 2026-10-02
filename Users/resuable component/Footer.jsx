import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Demics from "../src/assets/DEMICSDECK.pdf"
import logo from "../src/assets/demics.png";
import grid from "../src/assets/grid.png";

const Footer = () => {

  const navigate = useNavigate()
  return (
    <footer className="bg-[#111] text-white relative z-10 overflow-hidden w-screen">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase">
              Navigation Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300 cursor-pointer">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/aboutus")}>About Us</li>
              <li onClick={() => navigate("/services")}>Services</li>
              <li onClick={() => navigate("/work")}>Work</li>
              <li onClick={() => navigate("/blogs")}>Blog</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-300 cursor-pointer">
              <li onClick={() => navigate("/branding/:id")}>Branding</li>
              <li onClick={() => navigate("/socialmediamanagement/:id")}>Social Media Management</li>
              <li onClick={() => navigate("/marketing/:id")}>Marketing</li>
              <li onClick={() => navigate("/development/:id")}>Website</li>
              <li onClick={() => navigate("/adcreation/:id")}>AD Creation</li>
            </ul>
          </div>

          {/* Industry */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase">
              Specialized Industry
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Fintech Industry</li>
              <li>Healthcare & Fitness Industry</li>
              <li>Edtech Industry</li>
              <li>E-Commerce Industry</li>
              <li onClick={() => window.open(Demics, "_blank")}
                className="cursor-pointer">Company Deck</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase">
              Contact
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-purple-500" />
                <span>hello@demics.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-purple-500" />
                <span>+91 6393934851</span>
              </div>
            </div>

            <div className="flex gap-6 mt-8 text-2xl">

              <a
                href="https://www.facebook.com/share/1GU8nGP3Lv/"
                target="_blank"
                rel="demics"
              >
                <FaFacebookF className="cursor-pointer" />
              </a>

              <FaXTwitter />
              <a
                href="https://www.instagram.com/demics_creativehub?igsi=MW9kOGJ3c2M3ZTF2dA=="
                target="_blank"
                rel="demics"
              >
                <FaInstagram className="cursor-pointer" />
              </a>

            </div>
          </div>

        </div>
      </div>




      <div className="bg-gradient-to-r from-[#8200FF] via-[#7C2BF5] to-[#6A1FEE] py-8 overflow-hidden">
        <div className="animate-marquee">
          {[
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
          ].map((brand, index) => (
            <div
              key={index}
              className="mx-12 text-white font-bold text-lg whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>



      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <Link
            to="/terms-condition"
            className="cursor-pointer hover:text-white"
          >
            Terms & Conditions
          </Link>

          <span>© 2025 Demics. All rights reserved.</span>

          <Link
            to="/privacy-policy"
            className="cursor-pointer hover:text-white"
          >
            Privacy Policy
          </Link>

        </div>
      </div>


    

  {/* LOGO SECTION */}
<div className="relative bg-[#111] overflow-hidden">

  {/* Base: dark on top -> exact Figma purple at the bottom */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(180deg, #111111 0%, #151414 38%, #241239 55%, #34115d 66%, #4a118e 76%, #5d12bb 85%, #6a13d7 93%, #6c14db 100%)",
    }}
  />

  {/* Right-side purple tint (as in Figma) */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background:
        "linear-gradient(to right, rgba(62,17,117,0) 70%, rgba(62,17,117,0.95) 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, transparent 0%, black 25%, black 45%, transparent 75%)",
      maskImage:
        "linear-gradient(to bottom, transparent 0%, black 25%, black 45%, transparent 75%)",
    }}
  />

  {/* Soft glow (same color as bottom, so it only blurs, doesn't change the shade) */}
  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[110%] h-40 rounded-full bg-[#6c14db] blur-[90px] opacity-50 z-0 pointer-events-none" />

  {/* Grid (fades out towards the top) */}
  <img
    src={grid}
    alt=""
    aria-hidden="true"
    className="absolute bottom-0 left-0 w-full object-cover opacity-40 z-0 pointer-events-none"
    style={{
      WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 85%)",
      maskImage: "linear-gradient(to top, black 40%, transparent 85%)",
    }}
  />

  {/* Logo with white -> purple fade */}
  <div className="max-w-7xl mx-auto px-8 py-16 relative z-10 flex justify-center">
    <div className="relative w-full max-w-[1000px]">

      {/* invisible image: sets size + alt text */}
      <img
        src={logo}
        alt="Demics Logo"
        className="block w-full opacity-0 select-none"
      />

      {/* gradient clipped to the logo shape */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #fdfaff 0%, #fdfaff 40%, #dbc1fb 63%, #b177f7 85%, #8d39f6 100%)",
          WebkitMaskImage: `url(${logo})`,
          maskImage: `url(${logo})`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

    </div>
  </div>

</div>

    </footer>
  );
};

export default Footer;



// import React from "react";
// import {
//   FaInstagram,
//   FaXTwitter,
//   FaFacebookF,
// } from "react-icons/fa6";
// import { HiOutlineMail } from "react-icons/hi";
// import { FiPhone } from "react-icons/fi";
// import { Link, useNavigate } from "react-router-dom";
// import Demics from "../src/assets/DEMICSDECK.pdf"
// import logo from "../src/assets/demics.png";
// import grid from "../src/assets/grid.png";

// const Footer = () => {

//   const navigate = useNavigate()
//   return (
//     <footer className="bg-[#111] text-white relative z-10 overflow-hidden w-screen">

//       {/* TOP SECTION */}
//       <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

//           {/* Important Links */}
//           <div>
//             <h3 className="text-lg font-medium mb-6 uppercase">
//               Navigation Links
//             </h3>

//             <ul className="space-y-3 text-sm text-gray-300 cursor-pointer">
//               <li onClick={() => navigate("/")}>Home</li>
//               <li onClick={() => navigate("/aboutus")}>About Us</li>
//               <li onClick={() => navigate("/services")}>Services</li>
//               <li onClick={() => navigate("/work")}>Work</li>
//               <li onClick={() => navigate("/blogs")}>Blog</li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-medium mb-6 uppercase">
//               Services
//             </h3>

//             <ul className="space-y-3 text-sm text-gray-300 cursor-pointer">
//               <li onClick={() => navigate("/branding/:id")}>Branding</li>
//               <li onClick={() => navigate("/socialmediamanagement/:id")}>Social Media Management</li>
//               <li onClick={() => navigate("/marketing/:id")}>Marketing</li>
//               <li onClick={() => navigate("/development/:id")}>Website</li>
//               <li onClick={() => navigate("/adcreation/:id")}>AD Creation</li>
//             </ul>
//           </div>

//           {/* Industry */}
//           <div>
//             <h3 className="text-lg font-medium mb-6 uppercase">
//               Specialized Industry
//             </h3>

//             <ul className="space-y-3 text-sm text-gray-300">
//               <li>Fintech Industry</li>
//               <li>Healthcare & Fitness Industry</li>
//               <li>Edtech Industry</li>
//               <li>E-Commerce Industry</li>
//               <li onClick={() => window.open(Demics, "_blank")}
//                 className="cursor-pointer">Company Deck</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-medium mb-6 uppercase">
//               Contact
//             </h3>

//             <div className="space-y-4 text-sm text-gray-300">
//               <div className="flex items-center gap-3">
//                 <HiOutlineMail className="text-purple-500" />
//                 <span>hello@demics.com</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <FiPhone className="text-purple-500" />
//                 <span>+91 6393934851</span>
//               </div>
//             </div>

//             <div className="flex gap-6 mt-8 text-2xl">

//               <a
//                 href="https://www.facebook.com/share/1GU8nGP3Lv/"
//                 target="_blank"
//                 rel="demics"
//               >
//                 <FaFacebookF className="cursor-pointer" />
//               </a>

//               <FaXTwitter />
//               <a
//                 href="https://www.instagram.com/demics_creativehub?igsi=MW9kOGJ3c2M3ZTF2dA=="
//                 target="_blank"
//                 rel="demics"
//               >
//                 <FaInstagram className="cursor-pointer" />
//               </a>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* PARTNER STRIP (Figma-style deep violet) */}
//       <div className="bg-gradient-to-r from-[#6A1FEE] via-[#7C2BF5] to-[#6A1FEE] py-8 overflow-hidden">
//         <div className="animate-marquee">
//           {[
//             "EVOLUTION",
//             "pigment play",
//             "L.A. COLORS",
//             "L.A. Girl",
//             "LORD & BERRY",
//             "MILANI",
//             "Gartner",
//             "EVOLUTION",
//             "pigment play",
//             "L.A. COLORS",
//             "L.A. Girl",
//             "LORD & BERRY",
//             "MILANI",
//             "Gartner",
//           ].map((brand, index) => (
//             <div
//               key={index}
//               className="mx-12 text-white font-bold text-lg whitespace-nowrap"
//             >
//               {brand}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ============ BOTTOM AREA: one continuous gradient (copyright + logo) ============ */}
//       <div
//         className="relative overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(180deg, #111111 0%, #1c0a38 25%, #3f0f8f 60%, #6a1fee 100%)",
//         }}
//       >

//         {/* Grid lines over the whole gradient */}
//         <img
//           src={grid}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 w-full h-full object-cover object-bottom opacity-50 z-0 pointer-events-none"
//         />

//         {/* COPYRIGHT */}
//         <div className="border-t border-white/10 relative z-10">
//           <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white">

//             <Link
//               to="/terms-condition"
//               className="cursor-pointer hover:text-purple-300 transition-colors"
//             >
//               Terms & Conditions
//             </Link>

//             <span>© 2025 Demics. All rights reserved.</span>

//             <Link
//               to="/privacy-policy"
//               className="cursor-pointer hover:text-purple-300 transition-colors"
//             >
//               Privacy Policy
//             </Link>

//           </div>
//         </div>

//         {/* LOGO SECTION (white -> lavender gradient fill) */}
//         <div className="max-w-7xl mx-auto px-8 py-12 md:py-16 relative z-10 flex justify-center">

//           <div className="relative w-full max-w-[1000px]">

//             {/* Invisible image: only defines the size + keeps alt text */}
//             <img
//               src={logo}
//               alt="Demics Logo"
//               className="block w-full opacity-0 select-none"
//             />

//             {/* Gradient clipped to the logo shape */}
//             <div
//               aria-hidden="true"
//               className="absolute inset-0"
//               style={{
//                 background:
//                   "linear-gradient(180deg, #ffffff 30%, #d4bcff 62%, #9a5cff 100%)",
//                 WebkitMaskImage: `url(${logo})`,
//                 maskImage: `url(${logo})`,
//                 WebkitMaskSize: "100% 100%",
//                 maskSize: "100% 100%",
//                 WebkitMaskRepeat: "no-repeat",
//                 maskRepeat: "no-repeat",
//                 WebkitMaskPosition: "center",
//                 maskPosition: "center",
//               }}
//             />

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;