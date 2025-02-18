import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Alert = ({ type = "info", message }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-800",
    error: "bg-red-100 border-red-500 text-red-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    info: "bg-blue-100 border-blue-500 text-blue-800",
  };

  return (
    <div
      className={`flex items-center justify-between p-4 border-l-4 rounded-lg shadow-md ${alertStyles[type]}`}
    >
      <p className="font-semibold">{message}</p>
      <button
        onClick={() => setVisible(false)}
        className="text-xl text-gray-700 hover:text-gray-900 transition"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Alert;
