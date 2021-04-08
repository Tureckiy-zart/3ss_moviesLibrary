import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

const initialState = {
  isLoading: false,
  trendingMovies: [],
  moviesByCategorye:[],
  error: null,
  canShowTrending: true,
  currentPage: 1
};
export const DataProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};
