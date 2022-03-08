import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`py-1 text-xs bg-blue-400 text-center ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
