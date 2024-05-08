import React from "react";

const Heading = (
    { children, textSize='4xl', className='' }) => {
        console.log(className)
  return (
    <h2 className={`text-${textSize} font-secondary  ${className}`}>{children}</h2>
  );
};

export default Heading;
