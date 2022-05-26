import React from "react";
import { Link } from "react-router-dom";
import { FacebookLogo, Friend, Home } from "../../../icons";
import DropDown from "./DropDown";
import Logo from "./Logo";
import Menu from "./Menu";
import ProfileIcon from "./ProfileIcon";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm py-0 fixed-top">
        <div className="container-fluid">
          <Logo />
          <Menu />

          <div className="d-flex justify-content-end align-items-center flex-grow-1 me-1">
            <ProfileIcon />
            <DropDown />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
