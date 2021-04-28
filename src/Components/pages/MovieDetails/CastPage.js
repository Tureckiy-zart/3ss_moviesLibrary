import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  StyledGalleryList,
  StyledGalleryListItem,
} from "../../structure/stylredComponents/List.styled";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../../structure/stylredComponents/Title.styled";

const CastPage = ({ setIsLoading, setState, errorHandler, history }) => {
  let { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true); //spiner on

    doFetch("getMovieCast", { id })
      // .then(({ crew }) => setCast(crew))
      .then(({ cast }) => setCast(cast))
      .catch((error) => {
        errorHandler(error, setState, history);
      })
      .finally(setIsLoading(false));
  }, [id, setIsLoading, setState, history, errorHandler]);

  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        <ButtonsHistoryReturn />
        {cast && (
          <StyledGalleryList>
            {cast.map(({ id, character, profile_path, name, popularity }) => (
              <StyledGalleryListItem key={id}>
                <ImageWrapper>
                  <Image
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w154/${profile_path}`
                        : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                    }
                    alt={name ? name : "No-name"}
                  />
                </ImageWrapper>
                <InfoWrapper>
                  <MovieTittle>{name}</MovieTittle>
                  <AdditionText>Character: {character}</AdditionText>
                  <AdditionText>
                    Popularity: {Number(popularity).toFixed(1)}
                  </AdditionText>
                </InfoWrapper>
              </StyledGalleryListItem>
            ))}
          </StyledGalleryList>
        )}
        <ButtonsHistoryReturn />
      </Container>
    </ComponentWrapper>
  );
};

export default withData(memo(CastPage));
