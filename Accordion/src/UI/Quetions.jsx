import React from "react";

function Quetions({ curData, ontoggle, isActive }) {
  return (
    <>
      <li className="flex justify-between bg-blue-800 m-2 pl-8 pr-8 p-2 rounded-md">
        <div className="pr-32">
          <h1>Quetion - {curData.Quation}</h1>
          <p>{isActive && `Answer - ${curData.Answer}`}</p>
        </div>
        <button
          className="bg-gray-800 h-10 w-40 rounded-md shadow-lg"
          onClick={ontoggle}
        >
          {isActive ? "Close" : "Show Answer"}
        </button>
      </li>
    </>
  );
}

export default Quetions;
