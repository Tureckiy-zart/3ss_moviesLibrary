import React from "react";
import useFavorites from "../../Hooks/useFavorites";
import List from "../structure/List/List";

function FavoritesPage() {
  const [localStorageValue] = useFavorites();
  return (
    <div>
      <p>Favorite page</p>
      {localStorageValue && <List dataMovies={localStorageValue} />}
    </div>
  );
}
export default FavoritesPage;
