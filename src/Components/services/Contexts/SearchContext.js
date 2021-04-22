import React, { useContext, useState } from "react";
import SearchMovie from "../../pages/SearchMovie";

const SearchContext = React.createContext();

export const useSearchContext = () => useContext(SearchContext);

const initialState = {
  searchQuery: "",
};

export const SearchContextProvider = () => {
  const [searchQuery, setSearchQuery] = useState(initialState);
  return (
    <SearchContext.Provider value={[searchQuery, setSearchQuery]}>
      <SearchMovie />
    </SearchContext.Provider>
  );
};
