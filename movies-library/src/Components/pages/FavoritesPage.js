import React from "react";
import useFavorites from "../../Hooks/useFavorites";
import List from "../structure/List/List";
import { Container } from "../structure/stylredComponents/stiledComponents";

function FavoritesPage() {
  const [localStorageValue] = useFavorites();
  console.log("localStorageValue :>> ", localStorageValue);
  return (
    <Container>
      <p>Favorite page</p>
      {localStorageValue.length > 0 && <List dataMovies={localStorageValue} />}
    </Container>
  );
}
export default FavoritesPage;
