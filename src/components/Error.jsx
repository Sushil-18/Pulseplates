import React from "react";

const Error = ({ title, message }) => {
  return (
    <div className="flex flex-col mt-16 items-center">
      <p>{title}</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
