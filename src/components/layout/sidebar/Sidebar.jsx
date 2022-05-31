import React from "react";
import { Outlet } from "react-router-dom";
import MenuList from "./MenuList";

function Sidebar() {
  return (
    <>
      <div className="w-80 bg-white d-flex flex-column shadow position-fixed h-100">
        <h1 className="mx-3 tw-mt-3 mb-3 text-6 fw-bolder">Friends</h1>
        <MenuList />
      </div>
      <Outlet />
    </>
  );
}

export default Sidebar;
