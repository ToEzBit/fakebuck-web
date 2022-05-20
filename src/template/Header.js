import { Dropdown } from 'bootstrap';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FacebookLogo, Friend, Home } from './icons';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm py-0 fixed-top">
        <div className="container-fluid">
          <div className="ms-1 flex-grow-1 py-2">
            <Link className="navbar-brand" to="/">
              <FacebookLogo />
            </Link>
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="collapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse justify-content-center flex-grow-1">
            <div className="navbar-nav space-x-1">
              <Link className="nav-link tw-px-10 mx-1" to="/">
                <Home className="fill-primary" />
              </Link>
              <Link
                className="nav-link tw-px-10 mx-1 rounded-lg hover-bg-gray-200"
                to="/friend"
              >
                <Friend />
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-end align-items-center flex-grow-1 me-1">
            <Link
              to="/profile"
              className="rounded-pill p-1 d-flex align-items-center text-decoration-none hover-bg-gray-200"
            >
              <img
                className="rounded-circle"
                src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                width="28"
                height="28"
                alt="user"
              />
              <span className="ms-2 text-dark fw-bold me-1 text-3.5">Han</span>
            </Link>
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
                    to="/profile"
                  >
                    <img
                      className="rounded-circle me-3"
                      src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                      width="60"
                      height="60"
                      alt="user"
                    />
                    <div className="d-flex flex-column">
                      <span className="fw-bold">Han So Yoon</span>
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
                    onClick={() => navigate('/login')}
                  >
                    <i className="fas fa-sign-out-alt rounded-circle p-2 bg-gray-300 text-5" />
                    <small className="fw-bold ps-2">Log Out</small>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
