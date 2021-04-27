import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import SubNavigation from "../../Navigation/SubNavigation";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  ComponentWrapper,
  Container,
  ExternalLink,
} from "../../structure/stylredComponents/stiledComponents";
import {
  MovieTittle,
  AdditionText,
  SenondaryText,
} from "../../structure/stylredComponents/Title.styled";
import { getDate } from "../../heplers/heplers";
import { getMovieDataByID } from "../../services/API/getData";
import { useLoader } from "../../services/Contexts/LoaderContext";
import {
  ImgWrapper,
  PageWrapper,
} from "../../structure/stylredComponents/MovieDetailsPage.styled";
import FavoritesBtns from "../Favorites/FavoritesBtns";
import { Image } from "../../structure/stylredComponents/List.styled";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 2vw;
`;

const buttonStyles = {
  position: "absolute",
  top: "35px",
  right: "60px",
};

const MovieDetailsPage = () => {
  let { id } = useParams();
  const [, setIsLoading] = useLoader();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => getMovieDataByID(id, setMovieDetails, setIsLoading), [
    id,
    setIsLoading,
  ]);
  // const   {
  //       title,
  //       poster_path,
  //       name,
  //       overview,
  //       vote_average,
  //       vote_count,
  //       release_date,
  //       homepage,
  //     }  = movieDetails;
  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        {movieDetails && (
          <PageWrapper>
            <MovieTittle>{movieDetails.title}</MovieTittle>
            <StyledDiv>
              <div>
                <ImgWrapper>
                  <Image
                    src={
                      movieDetails.poster_path
                        ? `https://image.tmdb.org/t/p/w154/${movieDetails.poster_path}`
                        : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                    }
                    alt={
                      movieDetails.title
                        ? movieDetails.title
                        : movieDetails.name
                    }
                    // width="250"
                  />
                  <FavoritesBtns styles={buttonStyles} item={movieDetails} />
                </ImgWrapper>
              </div>
              <div>
                <AdditionText marginBottom="1rem">
                  {movieDetails.overview}
                </AdditionText>

                <SenondaryText>
                  Rating IMDB: {movieDetails.vote_average}
                </SenondaryText>
                <SenondaryText>
                  Vote count: {movieDetails.vote_count}
                </SenondaryText>

                {movieDetails.release_date && (
                  <SenondaryText>
                    Release: {getDate(movieDetails.release_date)}
                  </SenondaryText>
                )}
                <SubNavigation />

                <ExternalLink href={movieDetails.homepage}>
                  Visit movie page
                </ExternalLink>
              </div>
            </StyledDiv>

            <ButtonsHistoryReturn />
          </PageWrapper>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default memo(MovieDetailsPage);