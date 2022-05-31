import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
}

const useError = () => {
  const ctx = useContext(ErrorContext);
  return ctx;
};

export default ErrorContextProvider;
export { ErrorContext, useError };
