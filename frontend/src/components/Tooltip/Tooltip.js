import React, { ReactNode, useState } from "react";

export const Tooltip = ({ message, children }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col items-center group z-10">
      <span className="flex justify-center" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </span>
      <div className={`absolute whitespace-nowrap bottom-full flex flex-col items-center -right-[120px] top-2 group-hover:flex ${!show ? "hidden" : null}`} >
        <span className="relative z-10 p-2 text-lg leading-none text-white whitespace-no-wrap bg-primary-500 shadow-lg rounded-md">
          {message}
        </span>
        <div className="absolute w-3 h-3 rotate-45 bg-primary-500 -left-[5px] top-3" />
      </div>
    </div>
  );
};
