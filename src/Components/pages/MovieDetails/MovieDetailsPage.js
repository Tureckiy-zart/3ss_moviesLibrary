import React, { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import SubNavigation from "./SubNavigation";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  ComponentWrapper,
  Container,
  ExternalLink,
  StyledDiv,
} from "../../structure/stylredComponents/stiledComponents";
import {
  MovieTittle,
  AdditionText,
  SenondaryText,
} from "../../structure/stylredComponents/Title.styled";
import { getDate } from "../../heplers/heplers";
import { ErrorHandler } from "../../services/API/getData";
import { useLoader } from "../../services/Contexts/LoaderContext";
import {
  ImgWrapper,
  PageWrapper,
} from "../../structure/stylredComponents/MovieDetailsPage.styled";
import FavoritesBtns from "../Favorites/FavoritesBtns";
import { Image } from "../../structure/stylredComponents/List.styled";
import { doFetch } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";

const buttonStyles = {
  position: "absolute",
  top: "35px",
  right: "60px",
};

const MovieDetailsPage = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const [, setState] = useData(null);
  const history = useHistory();
  const [, setIsLoading] = useLoader();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);

    doFetch("getMovieByID", { id })
      .then((response) => setMovieDetails(response))
      .catch((error) => ErrorHandler(error, history))
      .finally(setIsLoading(false));
  }, [id, setIsLoading, setState, history]);

  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        {movieDetails && (
          <div>
            <ButtonsHistoryReturn />
          
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
                  />
                  <FavoritesBtns styles={buttonStyles} item={movieDetails} />
                  <MovieTittle marginBottom='0'>{movieDetails.title}</MovieTittle>
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
                {movieDetails.budget && (
                  <SenondaryText>Budget: {movieDetails.budget / 1000000 } mln.$</SenondaryText>
                )}

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

          </div>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default memo(MovieDetailsPage);
