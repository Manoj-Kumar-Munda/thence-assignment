import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F5] rounded-3xl py-8 mb-6 font-primary font-medium">
      <div className="flex justify-between px-4">
        <span>&copy; Talup 2023. All rights reserved</span>

        <div className="flex gap-6">
          <span>Terms & Conditions</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
