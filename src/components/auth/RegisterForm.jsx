import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorContext } from "../../contexts/errorContext";

function RegisterForm({ closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signUp } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      //validate input first
      //end validate

      await signUp({
        firstName,
        lastName,
        emailOrPhone,
        password,
        confirmPassword,
      });

      closeModal();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            placeholder="Mobile number or email address"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className=" d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-green text-4.5 h-9 shadow-none d-flex justify-content-center align-items-center tw-px-10"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
