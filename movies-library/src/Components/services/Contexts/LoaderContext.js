import React, { useContext, useState } from "react";
const LoaderContext = React.createContext();

export const useLoader = () => useContext(LoaderContext);

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toggler = () => setIsLoading((prev) => !prev);

  return (
    <LoaderContext.Provider value={[isLoading, setIsLoading]}>
      {children}
    </LoaderContext.Provider>
  );
};
