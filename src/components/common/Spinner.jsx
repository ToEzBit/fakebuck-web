function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center offcanvas-backdrop show"
      style={{ zIndex: 1100 }}
    >
      <div className="spinner-border text-primary"></div>
      <span className="text-primary ms-3">Please Wait</span>
    </div>
  );
}

export default Spinner;
