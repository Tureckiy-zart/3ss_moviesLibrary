import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieCast } from "../../services/API/api";
import ButtonsHistoryReturn from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  StyledGalleryList,
  StyledGalleryListItem,
} from "../../structure/stylredComponents/LIst/List.styled";
import { Container } from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../../structure/stylredComponents/Title/Title";

const CastPage = () => {
  let { id } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => getMovieCast(id).then((response) => setCast(response)), [id]);
  return (
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
  );
};

export default CastPage;
