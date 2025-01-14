import React, { useState } from "react";
// import "./TextArea.css";
function TextArea() {
  return (
    <>
      <div className="h-svh bg-gray-400">
        <div className="grid">
          <textarea className="w-[90%] bg-gray-800 ml-[5%] mt-10 rounded-lg h-80 text-white p-10"></textarea>
          <div className="flex justify-center space-x-4 mt-5">
            <button className="bg-blue-600 border-none rounded-md p-2 text-white">
              UpperCase
            </button>
            <button className="bg-blue-600 border-none rounded-md p-2 text-white">
              LowerCase
            </button>
            <button className="bg-blue-600 border-none rounded-md p-2 text-white">
              Trim
            </button>
          </div>
        </div>
        <div className="m-[5%]">
          <p className="">Word:()</p>
          <p className="">Charactors:</p>
        </div>
      </div>
    </>
  );
}

export default TextArea;
