import React from "react";

const Button = ({ name, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 p-3 pt-2 hover:bg-transparent hover:scale-95 hover:ring-2 ring-brightRed text-white bg-brightRed rounded-full baseline ${className} `}
    >
      {name}
    </button>
  );
};

export default Button;
