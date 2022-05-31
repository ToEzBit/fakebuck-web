import React from "react";

function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
      className="form-control border-0 shadow-none resize-none"
      placeholder={placeholder}
      rows="5"
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export default TextArea;
