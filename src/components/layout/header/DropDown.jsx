import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import UserIcon from "../../common/UserIcon";

function DropDown() {
  const { logout, user } = useContext(AuthContext);

  return (
    <>
      <div className="dropdown ms-2">
        <button
          className="btn rounded-circle w-10 h-10 bg-gray-200 hover-bg-gray-300 shadow-none"
          data-bs-toggle="dropdown"
        >
          <i className="fa-solid fa-caret-down" />
        </button>
        <ul className="dropdown-menu dropdown-menu-end px-2 mt-1 border border-1 rounded-xl shadow-sm w-sm-90">
          <li>
            <Link
              className="dropdown-item p-2 d-flex align-items-center hover-bg-neutral-100 hover-rounded-lg"
              to={`/profile/${user.id}`}
            >
              <UserIcon size="60" src={user.profilePic} />

              <div className="d-flex flex-column ms-3">
                <span className="fw-bold">
                  {user.firstName}&nbsp;
                  {user.lastName}
                </span>
                <small className="text-muted">See your profile</small>
              </div>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider mx-2 border-1" />
          </li>
          <li>
            <button
              className="dropdown-item d-flex align-items-center p-2 hover-bg-neutral-100 hover-rounded-lg"
              type="button"
              onClick={logout}
            >
              <i className="fas fa-sign-out-alt rounded-circle p-2 bg-gray-300 text-5" />
              <small className="fw-bold ps-2">Log Out</small>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropDown;
