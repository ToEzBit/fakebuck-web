import LoginForm from "../components/auth/LoginForm";

function LoginPage() {
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
            <LoginForm />
            <div className="mt-4 text-center">
              <small>
                <b>Create a Page</b> for a celebrity, brand or business.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
