function ProfilePage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div className="border border-2 shadow-sm pb-2">
        <div
          className="overflow-hidden position-relative mx-auto rounded-b-lg max-w-274 max-h-101"
          style={{
            aspectRatio: '1096/404'
          }}
        >
          <img
            src="https://images.pexels.com/photos/1292006/pexels-photo-1292006.jpeg"
            alt="cover"
            className="position-absolute img-fluid top-50 start-50 translate-middle"
          />
        </div>

        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 max-w-266 space-x-4">
          <div className="-mt-20 -mt-md-10 z-10">
            <img
              src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
              alt="user"
              className="rounded-circle border border-4 border-white h-42"
            />
          </div>

          <div className="mt-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
            <h2 className="fw-bold mb-0">Han So Yoon</h2>
            <span className="d-inline-block text-muted pt-1">158 Friends</span>
            <div className="pt-1 mb-3">
              <img
                src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg"
                className="rounded-circle border border-2 border-white h-8"
                alt="user"
              />
              <img
                src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
              <img
                src="https://images.pexels.com/photos/6986009/pexels-photo-6986009.jpeg"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1510597026538-da2e86b8588a"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1599460546755-ec4b6b7132a8"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1608109741046-0f246ffe4b9b"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
              <img
                src="https://images.unsplash.com/photo-1570752321219-41822a21a761"
                className="rounded-circle border border-2 border-white h-8 -ms-2"
                alt="user"
              />
            </div>
          </div>

          <div className="d-flex align-items-end mb-3">
            <button
              className="btn btn-gray-200"
              data-bs-toggle="modal"
              data-bs-target="#modal-edit-profile"
            >
              <i className="fa-solid fa-pen" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modal-edit-profile" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit profile</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Profile Picture</h5>
                <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                  Edit
                </button>
              </div>
              <div className="text-center mt-3">
                <img
                  src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                  alt="user"
                  className="rounded-circle border border-4 border-white h-42"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <h5 className="mb-0">Cover Photo</h5>
                <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                  Edit
                </button>
              </div>
              <div
                className="overflow-hidden position-relative mt-3 rounded-lg max-w-274 max-h-101"
                style={{
                  aspectRatio: '1096/404'
                }}
              >
                <img
                  src="https://images.pexels.com/photos/1292006/pexels-photo-1292006.jpeg"
                  alt="cover"
                  className="position-absolute img-fluid top-50 start-50 translate-middle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
