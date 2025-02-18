import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/api.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex px-28 justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <NavLink to={"/"} className=" flex">
            <img src={logo} alt="logo" className="h-16" />
            <span className="pt-3.5">MockProfileAPI</span>
          </NavLink>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-14">
          <NavLink to="/" className="text-white hover:text-gray-200">
            Home
          </NavLink>
          <NavLink to="/service" className="text-white hover:text-gray-200">
            FetchRQ
          </NavLink>
          <NavLink to="/gitData" className="text-white hover:text-gray-200">
            GitHubUser
          </NavLink>
          <NavLink to="/contect" className="text-white hover:text-gray-200">
            Contact
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-200">
            About
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            Home
          </a>
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            About
          </a>
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            Services
          </a>
          <a href="#" className="block text-white py-2 hover:bg-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
