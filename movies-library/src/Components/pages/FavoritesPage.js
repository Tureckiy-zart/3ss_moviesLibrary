import React from "react";
import useFavorites from "../../Hooks/useFavorites";
import { useData } from "../services/Contexts/DataContext";
import Gallery from "../structure/Gallery";
import List from "../structure/List/List";
import { Container } from "../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../structure/stylredComponents/Title.styled";

function FavoritesPage() {
  const [localStorageValue] = useFavorites();
  const [{ trendingMovies }] = useData(null); //Global state

  return (
    <Container>
      {localStorageValue.length > 0 ? (
        <List dataMovies={localStorageValue} /> // FIX
      ) : (
        <>
          <MovieTittle marginBottom="2rem">Nothing found.</MovieTittle>
          <AdditionText marginBottom="2rem">Most popular: </AdditionText>
          {trendingMovies.length > 0 && (
            <Gallery dataMovies={trendingMovies.slice(0, 5)} />
          )}
        </>
      )}
    </Container>
  );
}
export default FavoritesPage;
