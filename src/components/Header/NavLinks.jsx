import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link to={"/registration"}>
        <Button btnType="secondary-cta">Get Projects</Button>
      </Link>
      <Button btnType="primary-cta">Meet your candiadates</Button>
    </>
  );
};

export default NavLinks;
