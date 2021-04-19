import React from "react";
import { useData } from "../services/Contexts/DataContext";
import { GoHomeBtn } from "../structure/Buttons/ButtonsHistoryReturn";
import {
  CenteredImg,
  ImageWrapper,
} from "../structure/stylredComponents/List.styled";
import { Container } from "../structure/stylredComponents/stiledComponents";
import MostPopular from "./MostPopular";

function ErrorPage() {
  const [{ trendingMovies }] = useData(null); //Global state
  // if (trendingMovies) console.log("object :>> ", trendingMovies);
  return (
    <Container>
      <>
        <ImageWrapper>
          <GoHomeBtn />
          <CenteredImg src="https://ic.pics.livejournal.com/v_ellena/58458294/211746/211746_900.jpg" />
        </ImageWrapper>

        <MostPopular />
      </>
    </Container>
  );
}
export default ErrorPage;
