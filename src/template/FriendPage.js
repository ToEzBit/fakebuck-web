function FriendPage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div className="w-80 bg-white d-flex flex-column shadow position-fixed h-100">
        <h1 className="mx-3 tw-mt-3 mb-3 text-6 fw-bolder">Friends</h1>
        <ul className="px-2">
          <li className="bg-gray-100 rounded-3 d-flex">
            <a
              href="/"
              className="text-decoration-none text-black p-2 d-flex align-items-center space-x-3 flex-grow-1"
            >
              <div className="rounded-circle w-9 h-9 bg-primary d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-user-check text-white" />
              </div>
              <span>Friend Requests</span>
            </a>
          </li>
          <li className="rounded-3 d-flex">
            <a
              href="/"
              className="text-decoration-none text-black p-2 d-flex align-items-center space-x-3 flex-grow-1"
            >
              <div className="rounded-circle w-9 h-9 bg-gray-200 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-user-plus" />
              </div>
              <span>Suggestions</span>
            </a>
          </li>
          <li className="rounded-3 d-flex">
            <a
              href="/"
              className="text-decoration-none text-black p-2 d-flex align-items-center space-x-3 flex-grow-1"
            >
              <div className="rounded-circle w-9 h-9 bg-gray-200 d-flex justify-content-center align-items-center">
                <i className="fa-solid fa-user-group" />
              </div>
              <span>All Friends</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5">
        <h1 className="text-5 mb-3 fw-bold">Friend Requests</h1>
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1607408315636-9bbf355e7ff4"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Takahiro Miki</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Hsiao Li</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1550831858-3c2581fed470"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Andy Dufresne</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605087880595-8cc6db61f3c6"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Mayka Villaverde</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1618077360395-f3068be8e001"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Cameron Poe</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1639242210298-27861f84eab1"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">John Mason</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1627541718143-1adc1b582e62"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Anju Salgaonkar</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1575863527524-974033023c2f"
                className="card-img-top rounded-t-lg"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Ling Chen</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendPage;
