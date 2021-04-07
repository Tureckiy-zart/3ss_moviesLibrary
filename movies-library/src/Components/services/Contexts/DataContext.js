import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoading: false,
    trendingMovies: [],
    error: null,
  });

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};
