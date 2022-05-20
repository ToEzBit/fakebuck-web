import { Modal } from 'bootstrap';

function HomePage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div className="max-w-147.5 mx-auto py-4">
        <div className="border bg-white rounded-lg shadow-sm px-3 tw-py-3">
          <div className="d-flex space-x-2">
            <a href="/">
              <img
                src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                alt="user"
                className="rounded-circle"
                height="40"
              />
            </a>
            <button
              className="btn btn-gray-200 rounded-pill text-muted flex-1 text-start"
              data-bs-toggle="modal"
              data-bs-target="#modal-post"
            >
              What's on your mind, Han?
            </button>
          </div>
        </div>

        <div className="modal fade" id="modal-post" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Post</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <textarea
                  className="form-control border-0 shadow-none resize-none"
                  placeholder="What's on your mind, Han?"
                  rows="5"
                ></textarea>
                <div
                  className="d-flex flex-column align-items-center mt-3 py-3 bg-gray-100 hover-bg-gray-200 rounded-2"
                  role="button"
                >
                  <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
                    <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle"></i>
                  </div>
                  <div className="mt-1">Add Photos</div>
                  <input type="file" className="d-none" />
                </div>
                <div className="pt-3">
                  <button
                    type="button"
                    className="btn btn-primary w-100 text-3.5 fw-bold h-9 shadow-none"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex flex-column space-y-4">
          <div className="border bg-white rounded-lg shadow-sm px-3 tw-pt-3">
            <div className="d-flex align-items-center space-x-2">
              <a href="/">
                <img
                  src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                  alt="user"
                  className="rounded-circle"
                  height="40"
                />
              </a>
              <div className="d-flex flex-column flex-fill">
                <a
                  href="/"
                  className="text-dark fw-bold no-underline hover-underline text-3.5"
                >
                  Han So Yoon
                </a>
                <small className="text-muted text-3">1h</small>
              </div>
              <button className="btn rounded-circle h-9 w-9 position-relative hover-bg-gray-200">
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
            </div>

            <div className="tw-mt-3">
              <p className="text-3.5 mb-0">
                This classic combination is delicious, so I stick to it.
              </p>
              <div className="-px-4 mt-3">
                <img
                  src="https://images.unsplash.com/photo-1546069901-5ec6a79120b0"
                  alt="post"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="d-flex tw-py-2.5">
              <div className="d-flex align-items-center space-x-1.5 flex-grow-1">
                <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center w-4.5 h-4.5">
                  <i className="fa-solid fa-thumbs-up text-white text-2.5" />
                </div>
                <small className="text-muted">10</small>
              </div>
              <small className="text-muted hover-underline" role="button">
                8 Comments
              </small>
            </div>
            <hr className="hr-sm my-0" />

            <div className="d-flex space-x-1 py-1">
              <button className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200">
                <i className="fa-regular fa-thumbs-up" />
                <small className="fw-bold">Like</small>
              </button>
              <button className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200">
                <i className="fa-regular fa-message" />
                <small className="fw-bold">Comment</small>
              </button>
            </div>

            <div className="pb-2">
              <hr className="my-0 hr-sm" />
              <div className="pt-1">
                <button className="btn p-0 pt-1 text-muted shadow-none text-3.5 hover-underline">
                  View 5 previous comments
                </button>

                <div className="pt-2 d-flex flex-column space-y-1">
                  <div className="d-flex">
                    <a href="/">
                      <img
                        src="https://images.unsplash.com/photo-1607408315636-9bbf355e7ff4"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column ms-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark text-3 fw-bold no-underline hover-underline"
                          >
                            Takahiro Miki
                          </a>
                          <small>Look Delicous.</small>
                        </div>

                        <div className="dropdown ms-1">
                          <button className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">2h</span>
                    </div>
                  </div>

                  <div className="d-flex">
                    <a href="/">
                      <img
                        src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column ms-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark text-3 fw-bold no-underline hover-underline"
                          >
                            Hsiao Li
                          </a>
                          <small>Where are you?, That's look fantastic.</small>
                        </div>
                        <div className="dropdown ms-1">
                          <button className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">58m</span>
                    </div>
                  </div>

                  <div className="d-flex">
                    <a href="/">
                      <img
                        src="https://images.unsplash.com/photo-1627541718143-1adc1b582e62"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column ms-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark text-3 fw-bold no-underline hover-underline"
                          >
                            Anju Salgaonkar
                          </a>
                          <small>Can't waiting</small>
                        </div>

                        <div className="dropdown ms-1">
                          <button className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">13m</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex pt-1">
                  <a href="/">
                    <img
                      src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                      className="rounded-circle"
                      width="32"
                      height="32"
                      alt="user"
                    />
                  </a>
                  <input
                    className="form-control rounded-pill ms-2 shadow-none border-0 bg-gray-200 focus-bg-gray-200 h-9 text-3.5"
                    placeholder="Write a comment..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border bg-white rounded-lg shadow-sm px-3 tw-pt-3">
            <div className="d-flex align-items-center space-x-2">
              <a href="/">
                <img
                  src="https://images.unsplash.com/photo-1575863527524-974033023c2f"
                  alt="user"
                  className="rounded-circle"
                  height="40"
                />
              </a>
              <div className="d-flex flex-column flex-fill">
                <a
                  href="/"
                  className="text-dark fw-bold no-underline hover-underline text-3.5"
                >
                  Ling Chen
                </a>
                <small className="text-muted text-3">18h</small>
              </div>
              <button className="btn rounded-circle h-9 w-9 position-relative hover-bg-gray-200">
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
            </div>

            <div className="tw-mt-3">
              <p className="text-3.5 mb-0">
                Hey guys, I'm a Frontend developer and I need Reactjs remote
                job.
              </p>
            </div>

            <div className="d-flex tw-py-2.5">
              <div className="d-flex align-items-center space-x-1.5 flex-grow-1">
                <div className="rounded-circle bg-primary d-flex justify-content-center align-items-center w-4.5 h-4.5">
                  <i className="fa-solid fa-thumbs-up text-white text-2.5" />
                </div>
                <small className="text-muted">34</small>
              </div>
              <small className="text-muted hover-underline" role="button">
                3 Comments
              </small>
            </div>
            <hr className="hr-sm my-0" />

            <div className="d-flex space-x-1 py-1">
              <button className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200">
                <i className="fa-regular fa-thumbs-up" />
                <small className="fw-bold">Like</small>
              </button>
              <button className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200">
                <i className="fa-regular fa-message" />
                <small className="fw-bold">Comment</small>
              </button>
            </div>

            <div className="pb-2">
              <hr className="my-0 hr-sm" />
              <div className="pt-1">
                {/* <button className="btn p-0 pt-1 text-muted shadow-none text-3.5 hover-underline">
                  View 5 previous comments
                </button> */}

                <div className="pt-2 d-flex flex-column space-y-1">
                  <div className="d-flex">
                    <a href="/">
                      <img
                        src="https://images.unsplash.com/photo-1618077360395-f3068be8e001"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column ms-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark text-3 fw-bold no-underline hover-underline"
                          >
                            Cameron Poe
                          </a>
                          <small>Inbox me.</small>
                        </div>

                        <div className="dropdown ms-1">
                          <button className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">11h</span>
                    </div>
                  </div>

                  <div className="d-flex">
                    <a href="/">
                      <img
                        src="https://images.unsplash.com/photo-1605087880595-8cc6db61f3c6"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column ms-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark text-3 fw-bold no-underline hover-underline"
                          >
                            Mayka Villaverde
                          </a>
                          <small>Let me see your portfolio.</small>
                        </div>
                        <div className="dropdown ms-1">
                          <button className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">25m</span>
                    </div>
                  </div>

                  <div className="d-flex">
                    <a href="/">
                      <img
                        src="https://images.unsplash.com/photo-1639242210298-27861f84eab1"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column ms-2">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark text-3 fw-bold no-underline hover-underline"
                          >
                            John Mason
                          </a>
                          <small>Im highly interested.</small>
                        </div>

                        <div className="dropdown ms-1">
                          <button className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">22s</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex pt-1">
                  <a href="/">
                    <img
                      src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg"
                      className="rounded-circle"
                      width="32"
                      height="32"
                      alt="user"
                    />
                  </a>
                  <input
                    className="form-control rounded-pill ms-2 shadow-none border-0 bg-gray-200 focus-bg-gray-200 h-9 text-3.5"
                    placeholder="Write a comment..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
