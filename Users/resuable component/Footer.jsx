import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import logo from "../src/assets/demics.png"

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase">
              Important Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Work</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Branding</li>
              <li>Social Media Management</li>
              <li>Marketing</li>
              <li>Website</li>
              <li>AD Creation</li>
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
              <li>Company Deck</li>
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
                <span>+91 91813 23 2309</span>
              </div>
            </div>

            <div className="flex gap-6 mt-8 text-2xl">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Strip */}
      <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 items-center text-center">
            {[
              "EVOLUTION",
              "pigment play",
              "L.A. COLORS",
              "L.A. Girl",
              "LORD & BERRY",
              "MILANI",
              "Gartner",
            ].map((brand) => (
              <div key={brand}>
                <h4 className="font-bold text-lg">{brand}</h4>
                <p className="text-xs mt-2 opacity-80">
                  Professional Partner
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span>Terms & Conditions</span>

          <span>© 2025 Demics. All rights reserved.</span>

          <span>Privacy Policy</span>
        </div>
      </div>

      {/* Logo Section */}
      <div className="relative bg-[#151515]">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-700/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-16 relative flex justify-center">
  <img
    src={logo}
    alt="Demics Logo"
    className="w-full max-w-[1000px] object-contain"
  />
</div>
      </div>
    </footer>
  );
};

export default Footer;