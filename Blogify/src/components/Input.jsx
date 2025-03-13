import React, { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="inline-block">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`px-2 py-1 rounded-2xl ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
