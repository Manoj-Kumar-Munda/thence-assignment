import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl px-2 sm:px-4 pt-4 layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
