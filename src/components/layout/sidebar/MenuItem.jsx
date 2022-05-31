import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ active, to, icon, title }) {
  return (
    <li className={`rounded-3 d-flex ${active ? "bg-gray-100" : ""}`}>
      <Link
        to={to}
        className="text-decoration-none text-black p-2 d-flex align-items-center space-x-3 flex-grow-1"
      >
        <div
          className={`rounded-circle w-9 h-9  d-flex justify-content-center align-items-center ${
            active ? "bg-primary text-white" : "bg-gray-200"
          }`}
        >
          <i className={icon} />
        </div>
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
