import React, { useContext, useState } from "react";
import { getFavoritesFromLocalStorage } from "../../heplers/heplers";

const DataContext = React.createContext();

export const useData = () => useContext(DataContext);

const initialState = {
  trendingMovies: [],
  moviesByCategorye: [],
  searchMovies: [],
  searchCollection: [],
  favorites: getFavoritesFromLocalStorage(),
  currentHomePage: 2,
  currentCategoryePage: 2,
  currentSearchMoviePage: 2,
  currentSearchCollection: 2,
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
