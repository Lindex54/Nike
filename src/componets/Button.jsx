import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button
      className="flex justify-center border 
    font-montserrat text-lg leading-non
     bg-coral-red rounded-full text-white
     border-coral-red items-center gap-2 px-7 py-4"
    >
      {label}

      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
