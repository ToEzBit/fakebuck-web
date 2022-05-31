import React from "react";
import { Outlet } from "react-router-dom";
import PostContextProvider from "../../contexts/PostContext";
import Header from "./header/Header";

function AuthLayout() {
  return (
    <>
      <Header />
      <div className="min-vh-100 tw-pt-14">
        <PostContextProvider>
          <Outlet />
        </PostContextProvider>
      </div>
    </>
  );
}

export default AuthLayout;
