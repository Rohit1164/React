import { CloudSnow } from "lucide-react";
import React, { useId } from "react";

function Select({ label, options, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className={`${className}`}>
          {label}
        </label>
      )}
      <select name="Select" id={id} ref={ref} className={``} {...props}>
        {options?.map((option) => {
          <option key={option} value={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
