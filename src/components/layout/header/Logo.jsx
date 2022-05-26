import React from "react";
import { Link } from "react-router-dom";
import { FacebookLogo } from "../../../icons";

function Logo() {
  return (
    <>
      <div className="ms-1 flex-grow-1 py-2">
        <Link className="navbar-brand" to="/">
          <FacebookLogo />
        </Link>
      </div>
    </>
  );
}

export default Logo;
