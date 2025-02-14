import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [responsive, setresponsive] = useState(false);

  return (
    <div className="bg-gray-900  w-full h-20 text-xl text-white relative">
      <nav className="flex justify-between items-center px-6 md:px-24 h-full">
        <NavLink to={"/"}>
          <div className="font-bold cursor-pointer text-2xl">WorldAtlas</div>
        </NavLink>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setresponsive(!responsive)}
        >
          {responsive ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`absolute md:static top-20 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform md:flex md:items-center md:gap-14 font-semibold ${
            responsive ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:gap-14 items-center py-4 md:py-0 font-semibold">
            <li className="cursor-pointer py-2 md:py-0">
              <NavLink to="/" onClick={() => setresponsive(false)}>
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer py-2 md:py-0">
              <NavLink to="/about" onClick={() => setresponsive(false)}>
                About
              </NavLink>
            </li>
            <li className="cursor-pointer py-2 md:py-0">
              <NavLink to="/country" onClick={() => setresponsive(false)}>
                Country
              </NavLink>
            </li>
            <li className="cursor-pointer py-2 md:py-0">
              <NavLink to="/contact" onClick={() => setresponsive(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
