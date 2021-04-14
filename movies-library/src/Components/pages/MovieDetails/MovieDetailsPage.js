import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieByID } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import SubNavigation from "../../Navigation/SubNavigation";
import ButtonsHistoryReturn from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  ComponentWrapper,
  Container,
  ExternalLink,
} from "../../structure/stylredComponents/stiledComponents";
import {
  MovieTittle,
  AdditionText,
  SenondaryText,
} from "../../structure/stylredComponents/Title/Title";
import { getDate } from "../../heplers/heplers";
import {
  ImgWrapper,
  PageWrapper,
} from "../../structure/stylredComponents/MovieDetailsPage.styled";
import FavoritesBtns from "../../structure/Buttons/FavoritesBtns";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 2vw;
`;

const MovieDetailsPage = () => {
  let { id } = useParams();
  const [response, setResponse] = useState(null);
  const [, setState] = useData();
  useEffect(() => {
    if (!id) return;
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    getMovieByID(id)
      .then((response) => {
        setResponse(response);
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          // error: error.response.data ? error.response.data : error,
          error: error,
        }));
        console.log("error :>> ", error);
        throw new Error(error);
      });
  }, [id, setState]);

  return (
    <Container>
      MovieDetailsPage
      {response && (
        <PageWrapper>
          <MovieTittle>{response.title}</MovieTittle>
          <StyledDiv>
            <div>
              <ImgWrapper>
                <img
                  src={
                    response.poster_path
                      ? `https://image.tmdb.org/t/p/w154/${response.poster_path}`
                      : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                  }
                  alt={response.title ? response.title : response.name}
                  width="250"
                />
                <FavoritesBtns position="absolute" bottom="20px" left="30px" />
              </ImgWrapper>
            </div>
            <div>
              <AdditionText marginBottom='1rem'>{response.overview}</AdditionText>
         
              <SenondaryText>
                Rating IMDB: {response.vote_average}
              </SenondaryText>
              <SenondaryText>Vote count: {response.vote_count}</SenondaryText>

              {response.release_date && (
                <SenondaryText>
                  Release: {getDate(response.release_date)}
                </SenondaryText>
              )}
              <SubNavigation />

              <ExternalLink href={response.homepage}>Visit movie page</ExternalLink>
            </div>
          </StyledDiv>

          <ButtonsHistoryReturn />
        </PageWrapper>
      )}
    </Container>
  );
};

export default memo(MovieDetailsPage);
