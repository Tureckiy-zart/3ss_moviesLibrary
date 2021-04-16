import React from "react";
import useFavorites from "../../Hooks/useFavorites";
import List from "../structure/List/List";
import { Container } from "../structure/stylredComponents/stiledComponents";
import { MovieTittle } from "../structure/stylredComponents/Title/Title";

function FavoritesPage() {
  const [localStorageValue] = useFavorites();
  return (
    <Container>
      <MovieTittle>My favorites</MovieTittle>
      {localStorageValue.length > 0 && <List dataMovies={localStorageValue} />}
    </Container>
  );
}
export default FavoritesPage;
