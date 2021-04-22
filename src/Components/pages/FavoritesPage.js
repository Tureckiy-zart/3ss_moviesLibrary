import React from "react";
import useFavorites from "../../Hooks/useFavorites";
import List from "../structure/List/List";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";

import MostPopular from "./MostPopular";

function FavoritesPage() {
  const [localStorageValue] = useFavorites();

  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        {localStorageValue.length > 0 ? (
          <List dataMovies={localStorageValue} /> // FIX
        ) : (
          <MostPopular />
        )}
      </Container>
    </ComponentWrapper>
  );
}
export default FavoritesPage;
