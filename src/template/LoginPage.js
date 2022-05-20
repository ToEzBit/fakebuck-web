import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="max-w-245 mx-auto">
        <div className="row">
          <div className="col-12 col-lg-6 tw-pt-10 tw-pt-lg-41 tw-ps-lg-10 ps-xl-0">
            <div className="text-center text-lg-start mx-auto max-w-100 max-w-lg-92 max-w-xl-125">
              <div className="tw-mb-5">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  className="-m-7"
                  alt="fakebook-logo"
                  height="106"
                />
              </div>
              <h2 className="fw-normal mb-0 px-3 px-lg-0 text-6 text-xl-7">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-6 tw-mt-10 tw-pt-lg-23 tw-pe-lg-10 pe-xl-0">
            <form className="border border-1 shadow p-3 rounded-lg bg-white mx-auto max-w-99">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Email address or phone number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-md h-13"
                  placeholder="Password"
                />
              </div>
              <div className="mb-2 d-grid">
                <button
                  type="button"
                  className="btn btn-primary rounded-md h-12 fw-bold text-4.5"
                  onClick={() => navigate('/')}
                >
                  Log In
                </button>
              </div>
              <div className="text-center">
                <a href="/" className="text-decoration-none">
                  <small>Forgotten password?</small>
                </a>
              </div>
              <hr className="hr-sm" />
              <div className="text-center tw-py-2.5">
                <button
                  className="btn btn-green rounded-md h-12 fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-register"
                  type="button"
                >
                  Create New Account
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <small>
                <b>Create a Page</b> for a celebrity, brand or business.
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-register" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Sign Up</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row gx-2 gy-3">
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Mobile number or email address"
                  />
                </div>
                <div className="col-12">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="New password"
                  />
                </div>
              </form>

              <div className="pt-3 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-green text-4.5 h-9 shadow-none d-flex justify-content-center align-items-center tw-px-10"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
