import React from "react";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <>
      Sidebar
      <Outlet />
    </>
  );
}

export default Sidebar;
