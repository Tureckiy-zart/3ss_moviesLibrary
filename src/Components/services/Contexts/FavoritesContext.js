// import React, { useContext, useState } from "react";

// import { getFavoritesFromLocalStorage } from "../../heplers/heplers";

// const FavoritesContext = React.createContext();

// const initialState = {
//     favorites: getFavoritesFromLocalStorage() || [],
// };
// export const useFavorite = () => useContext(FavoritesContext);

// export const FavoritesContextProvider = ({ childern }) => {
//   const [state, setState] = useState(initialState);

//   console.log("stat111111e :>> ", state);
//   return (
//     <FavoritesContext.Provider value={[state, setState]}>
//       {childern}
//     </FavoritesContext.Provider>
//   );
// };
