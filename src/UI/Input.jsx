import React from "react";

const Input = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        {...props}
        className="w-[50%] border-2 border-slate-300 rounded-md p-1"
      />
    </div>
  );
};

export default Input;
