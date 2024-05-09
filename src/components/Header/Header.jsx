import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import cross from "../../assets/Close.png";
import useAppContext from "../../context/appContext";
import Hamburgur from "./Hamburgur";
import NavLinks from "./NavLinks";

const Header = () => {
  const { pathname: path } = useLocation();
  const { showRedirectBtn, smMenuOpen } = useAppContext();

  return (
    <header
      className={`relative ${
        path === "/registration" ? "" : "border"
      } rounded-full`}
    >
      <nav className="flex justify-between items-center mx-4 py-4">
        <div className="ml-2">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {path !== "/registration" ? (
          <>
            <div className="hidden  sm:flex gap-4">
              <NavLinks />
            </div>
            <Hamburgur />
          </>
        ) : (
          <div
            className={`border rounded-full p-2 ${
              !showRedirectBtn && "hidden"
            }`}
          >
            <Link to={"/"}>
              <img src={cross} className="w-6 h-6" />
            </Link>
          </div>
        )}
      </nav>

      {smMenuOpen && (
        <div className="absolute border my-2 z-10  py-6 top-full w-full  bg-white shadow-lg rounded-3xl">
          <div className="flex flex-col items-center gap-y-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
