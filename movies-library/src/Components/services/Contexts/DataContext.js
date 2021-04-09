import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

const initialState = {
  currentSection: "home",
  isLoading: false,
  trendingMovies: [],
  moviesByCategorye: [],
  searchedMovies: [],
  canShowTrending: true,
  currentHomePage: 1,
  currentCategoryePage: 1,
  error: null,
};

export const DataProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <DataContext.Provider value={[state, setState]}>
      {children}
    </DataContext.Provider>
  );
};
