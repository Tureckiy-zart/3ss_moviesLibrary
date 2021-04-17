import React from "react";
import { useData } from "../services/Contexts/DataContext";
import ButtonsHistoryReturn from "../structure/Buttons/ButtonsHistoryReturn";
import Gallery from "../structure/Gallery";
import { Container } from "../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../structure/stylredComponents/Title.styled";

function ErrorPage() {
  const [{ trendingMovies }] = useData(null); //Global state
  // if (trendingMovies) console.log("object :>> ", trendingMovies);
  return (
    <Container>
      <ButtonsHistoryReturn />
      <MovieTittle marginBottom="3rem">404 Page not found</MovieTittle>
      <>
        <AdditionText marginBottom="2rem">Most popular: </AdditionText>

        {trendingMovies.length > 0 && (
          <Gallery dataMovies={trendingMovies.slice(0, 5)} />
        )}
      </>
    </Container>
  );
}
export default ErrorPage;
