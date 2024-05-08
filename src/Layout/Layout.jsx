import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-4">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
