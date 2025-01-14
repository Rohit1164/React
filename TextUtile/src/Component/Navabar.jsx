import React from "react";

function Navabar() {
  return (
    <div>
      <nav className="flex justify-start bg-gray-800 p-4">
        <div className="text-white">TextUtile</div>
        <div className="flex space-x-4 mx-10">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navabar;
