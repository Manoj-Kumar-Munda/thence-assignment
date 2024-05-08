import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import cross from "../assets/Close.png";
import Button from "./Button";


const Header = () => {
  const { pathname: path } = useLocation();
  console.log(path);
  return (
    <header
      className={`${
        path === "/registration" ? "" : "border"
      } rounded-full  py-4`}
    >
      <nav className="flex justify-between items-center mx-4 py-4">
        <div className="ml-2">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {
            path !== '/registration' ?
          (<div className="flex gap-4">
            <Link to={"/registration"}>
              <Button btnType="secondary-cta">Get Projects</Button>
            </Link>
            <Button btnType="primary-cta">Meet your candiadates</Button>
          </div>) :(
            <div className="border rounded-full p-2">
                <img src={cross} className="w-6 h-6"/>
            </div>
          )
        }
      </nav>
    </header>
  );
};

export default Header;
