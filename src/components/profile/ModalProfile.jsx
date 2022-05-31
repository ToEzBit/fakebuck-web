import { Modal } from "bootstrap";
import React, { useEffect, useRef, useState } from "react";
import UserIcon from "../common/UserIcon";
import axios from "../../config/axios";
import Spinner from "../common/Spinner";

function ModalProfile({ open, onClose, oldProfilePic }) {
  const modalEl = useRef();
  const profilePicInputEl = useRef();

  const [modal, setModal] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (open) {
      modal.show();
    }
  }, [open]);

  const handleClickSaveProfilePic = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("profilePic", profilePic);
      const res = await axios.patch("/users", formData);
      onClose();
      modal.hide();
      setProfilePic(null);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div
        className="modal fade"
        id="modal-edit-profile"
        tabIndex="-1"
        ref={modalEl}
        onClick={onClose}
      >
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
                <input
                  type="file"
                  className="d-none"
                  ref={profilePicInputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setProfilePic(e.target.files[0]);
                    }
                  }}
                />
                <div>
                  {profilePic && (
                    <>
                      <button
                        className="btn btn-link text-decoration-none hover-bg-gray-100"
                        onClick={handleClickSaveProfilePic}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-link text-decoration-none hover-bg-gray-100"
                        onClick={() => setProfilePic(null)}
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  <button
                    className="btn btn-link text-decoration-none hover-bg-gray-100"
                    onClick={() => profilePicInputEl.current.click()}
                  >
                    Edit
                  </button>
                </div>
              </div>
              <div className="text-center mt-3">
                <UserIcon
                  size="168"
                  src={
                    profilePic ? URL.createObjectURL(profilePic) : oldProfilePic
                  }
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
                  aspectRatio: "1096/404",
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
    </>
  );
}

export default ModalProfile;
