import { Link, useLocation } from "react-router-dom";
import { Friend, Home } from "../../../icons";

const inactive = " rounded-lg hover-bg-gray-200";

function Menu() {
  const { pathname } = useLocation();

  return (
    <div className="collapse navbar-collapse justify-content-center flex-grow-1">
      <div className="navbar-nav space-x-1">
        <Link
          className={`nav-link tw-px-10 mx-1${
            pathname === "/" ? "" : inactive
          }`}
          to="/"
        >
          <Home className={pathname === "/" ? "fill-primary" : "fill-gray"} />
        </Link>
        <Link
          className={`nav-link tw-px-10 mx-1${
            pathname === "/friend" ? "" : inactive
          }`}
          to="/friend"
        >
          <Friend
            className={pathname === "/friend" ? "fill-primary" : "fill-gray"}
          />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
