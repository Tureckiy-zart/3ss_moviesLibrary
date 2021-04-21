import React from "react";
import { useData } from "../services/Contexts/DataContext";
import Gallery from "../structure/Gallery";
import { Container } from "../structure/stylredComponents/stiledComponents";
import { AdditionText } from "../structure/stylredComponents/Title.styled";
const MostPopular = () => {
  const [{ trendingMovies }] = useData(null); //Global state

  return (
      <Container>
        <AdditionText marginBottom="2rem">Most popular: </AdditionText>
        {trendingMovies.length > 0 && (
          <Gallery dataMovies={trendingMovies.slice(0, 4)} />
        )}
      </Container>
  );
};

export default MostPopular;
