import React from "react";

const Button = ({ name, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 p-5 pt-2 hover:bg-transparent hover:text-black hover:scale-95 hover:ring-2 ring-brightRed text-white bg-brightRed rounded-2xl baseline ${className} `}
    >
      {name}
    </button>
  );
};

export default Button;
