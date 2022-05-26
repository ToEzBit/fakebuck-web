import { Modal } from "bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/errorContext";
import RegisterForm from "./RegisterForm";

function LoginForm() {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleClickModal = () => {
    const modelObj = new Modal(modalEl.current);
    setModal(modelObj);
    modelObj.show();
  };

  const closeModal = () => {
    modal.hide();
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await login({ emailOrPhone, password });
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data);
    }
  };

  return (
    <>
      <form
        className="border border-1 shadow p-3 rounded-lg bg-white mx-auto max-w-99"
        onSubmit={handleSubmitForm}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-md h-13"
            placeholder="Email address or phone number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control rounded-md h-13"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-2 d-grid">
          <button
            type="submit"
            className="btn btn-primary rounded-md h-12 fw-bold text-4.5"
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
            // data-bs-toggle="modal"
            // data-bs-target="#modal-register"
            onClick={handleClickModal}
            type="button"
          >
            Create New Account
          </button>
        </div>
      </form>

      <div
        className="modal fade"
        id="modal-register"
        tabIndex="-1"
        ref={modalEl}
      >
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
              <RegisterForm closeModal={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
