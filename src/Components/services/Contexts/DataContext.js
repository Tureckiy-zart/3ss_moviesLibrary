import React, { useContext, useState } from "react";

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

const initialState = {
  trendingMovies: [],
  moviesByCategorye: [],
  searchMovies: [],
  currentHomePage: 1,
  currentCategoryePage: 1,
  currentSearchMoviePage: 1,
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
