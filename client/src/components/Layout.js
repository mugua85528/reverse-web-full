import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "./Nav";

function Layout(props) {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
