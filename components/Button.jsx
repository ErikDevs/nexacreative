import React from "react";

const Button = ({ name, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3  hover:bg-transparent hover:text-black hover:scale-95 hover:ring-2 ring-brightRed text-white bg-brightRed rounded-2xl ${className} `}
    >
      {name}
    </button>
  );
};

export default Button;
