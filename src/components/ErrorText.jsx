import React from "react";
import Invalid from "../assets/invalid.png";

const ErrorText = ({ children }) => {
  return (
    <div className=" my-2 flex items-center gap-2">
      <img src={Invalid} />

      <span className="text-[#FF0808] font-primary text-sm font-medium">
        {children}
      </span>
    </div>
  );
};

export default ErrorText;
