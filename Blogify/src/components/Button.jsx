import React from "react";

function Button({
  children,
  type = "Button",
  className = "text-white bg-gray-800 rounded-md  hover:bg-gray-900 duration-500",
  ...props
}) {
  return (
    <button className={`px-3 py-2 ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
