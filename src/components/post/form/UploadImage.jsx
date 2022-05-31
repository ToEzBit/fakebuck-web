import React, { useRef } from "react";

function UploadImage({ value, onChange, onDelete }) {
  const inputEl = useRef();
  return (
    <>
      <div
        className="position-relative"
        role="button"
        onClick={() => inputEl.current.click()}
      >
        {value ? (
          <>
            <button
              className="btn-close position-absolute"
              style={{ top: 6, right: 6 }}
              onClick={(e) => {
                e.stopPropagation();
                inputEl.current.value = "";
                onDelete();
              }}
            ></button>
            <img
              src={URL.createObjectURL(value)}
              alt="post"
              className="img-fluid "
            />
          </>
        ) : (
          <div className="d-flex flex-column align-items-center mt-3 py-3 bg-gray-100 hover-bg-gray-200 rounded-2">
            <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
              <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle"></i>
            </div>
            <div className="mt-1">Add Photos</div>
          </div>
        )}
      </div>
      <input type="file" className="d-none" ref={inputEl} onChange={onChange} />
    </>
  );
}

export default UploadImage;
