import React from "react";
import logo from "../src/assets/demics.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-50 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          <img
            src={logo}
            alt="Demics"
            className="h-12 object-contain"
          />

          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-10 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md shadow-lg">
              <Link
                to="/"
                className="text-white text-sm uppercase font-medium"
              >
                Home
              </Link>

              <Link
                to="/aboutus"
                className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
              >
                About Us
              </Link>

              <Link
                to="/services"
                className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
              >
                Services
              </Link>

              <Link
                to="/work"
                className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
              >
                Work
              </Link>

              <Link
                to="/blogs"
                className="text-white/80 hover:text-white text-sm uppercase font-medium transition"
              >
                Blog
              </Link>
            </div>
          </div>

          <button className="px-8 py-4 rounded-full text-white text-sm font-medium uppercase bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;