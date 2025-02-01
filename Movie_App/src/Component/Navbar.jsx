import React from "react";
import { Menu, Search, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <Menu className="w-6 h-6" />
          <span>MovieDekho</span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-800 rounded-full px-3 py-1 space-x-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for movies or shows..."
            className="bg-transparent text-white outline-none w-full placeholder-gray-500"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
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
            Contect
          </NavLink>
          {/* <NavLink
            to="/profile"
            className="hover:text-yellow-400 transition flex items-center space-x-2"
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
