import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <NavLink to={"/"}>
            <div className="flex items-center mb-4 sm:mb-0">
              <span className="text-2xl font-bold">World Atlas</span>
            </div>
          </NavLink>

          <div className="flex flex-wrap mb-4 sm:mb-0 space-x-6">
            <NavLink to={"/"} className="hover:text-gray-400 cursor-pointer">
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className="hover:text-gray-400 cursor-pointer"
            >
              About
            </NavLink>

            <NavLink
              to={"/contact"}
              className="hover:text-gray-400 cursor-pointer"
            >
              Contact
            </NavLink>
            <NavLink
              to={"/country"}
              className="hover:text-gray-400 cursor-pointer"
            >
              Country
            </NavLink>
          </div>

          <div className="flex space-x-6">
            <NavLink
              to={"https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400  hover:text-white"
            >
              <FaFacebookF />
            </NavLink>
            <NavLink
              to={"https://twitter.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </NavLink>
            <NavLink
              to={"https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </NavLink>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 World Atlas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
