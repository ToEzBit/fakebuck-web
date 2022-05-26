import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

function AuthLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AuthLayout;
