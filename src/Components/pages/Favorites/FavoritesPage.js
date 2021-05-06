import React from "react";
import List from "../../structure/List/List";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import MostPopular from "../MostPopular";
import { useData } from "../../services/Contexts/DataContext";

function FavoritesPage() {
  const [{ favorites }] = useData(null);
  return (
    <ComponentWrapper as='main' position="relative" top="125px">
      <Container>
        {favorites.length > 0 ? (
          <List dataMovies={favorites} /> 
        ) : (
          <MostPopular />
        )}
      </Container>
    </ComponentWrapper>
  );
}
export default FavoritesPage;
