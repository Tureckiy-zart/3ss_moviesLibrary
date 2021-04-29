import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  StyledGalleryList,
  ListItem,
} from "../../structure/stylredComponents/List.styled";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../../structure/stylredComponents/Title.styled";

const CrewPage = ({ setIsLoading, setState, ErrorHandler, history }) => {
  let { id } = useParams();
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true); //spiner on

    doFetch("getMovieCast", { id })
      .then(({ crew }) => setCrew(crew))
      .catch((error) => {
        ErrorHandler(error,  history);
      })
      .finally(setIsLoading(false));
  }, [id, setIsLoading, setState, history, ErrorHandler]);
  // console.log(`crew`, crew?.length );

  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        {crew.length > 0 ? (
          <>
            <ButtonsHistoryReturn />
            <StyledGalleryList>
              {crew.map(({ id, profile_path, name, job, popularity }) => (
                <ListItem key={id}>
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
                    <AdditionText>Job: {job}</AdditionText>
                    <AdditionText>
                      Popularity: {Number(popularity).toFixed(1)}
                    </AdditionText>
                  </InfoWrapper>
                </ListItem>
              ))}
            </StyledGalleryList>
            <ButtonsHistoryReturn />
          </>
        ) : (
          <MovieTittle marginBottom="2rem">No cast</MovieTittle>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default withData(CrewPage);
