import React from "react";

function SavePostButton({ onClick }) {
  return (
    <div className="pt-3">
      <button
        type="button"
        className="btn btn-primary w-100 text-3.5 fw-bold h-9 shadow-none"
        onClick={onClick}
      >
        Post
      </button>
    </div>
  );
}

export default SavePostButton;
