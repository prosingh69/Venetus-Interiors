import React from 'react';

const Button = ({ children, onClick, className = '', type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}

      className={`group relative cursor-pointer active:scale-95 transition-all overflow-hidden ${className}`}
    >
      <span className="relative flex w-full items-center justify-center overflow-hidden">

        <span className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>

        <span className="absolute left-0 top-0 flex w-full justify-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {children}
        </span>

      </span>
    </button>
  );
};

export default Button;