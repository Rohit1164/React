import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md px-6 md:px-20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <span>MovieDekho</span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="hover:text-yellow-400 transition">
            Home
          </NavLink>
          <NavLink to="/movie" className="hover:text-yellow-400 transition">
            Movies
          </NavLink>
          <NavLink to="/tv" className="hover:text-yellow-400 transition">
            TV Shows
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow-400 transition">
            About
          </NavLink>
          <NavLink to="/contect" className="hover:text-yellow-400 transition">
            Contact
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 py-4 space-y-3 text-center">
          <NavLink
            to="/"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movie"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Movies
          </NavLink>
          <NavLink
            to="/tv"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            TV Shows
          </NavLink>
          <NavLink
            to="/about"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contect"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
