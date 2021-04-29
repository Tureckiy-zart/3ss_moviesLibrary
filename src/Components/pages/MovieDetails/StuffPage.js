import { nanoid } from "nanoid";
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
  StyledGalleryListItem,
} from "../../structure/stylredComponents/List.styled";
import { StyledNavLink } from "../../structure/stylredComponents/Navigation.styled";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../../structure/stylredComponents/Title.styled";

const PageMarkup = ({ currentArray }) => {
  return (
    <>
      {currentArray ? (
        <>
          <ButtonsHistoryReturn />
          <StyledGalleryList>
            {currentArray.map(
              ({ credit_id, character, profile_path, name, popularity }) => (
                <StyledNavLink key={nanoid(5)}
                  to={{
                    pathname: `/asset/person/${name}`,
                    search: `${credit_id}`,
                    // state: { from: history.location },
                  }}
                >
                  <StyledGalleryListItem >
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
                </StyledNavLink>
              )
            )}
          </StyledGalleryList>
          <ButtonsHistoryReturn />
        </>
      ) : (
        <MovieTittle marginBottom="2rem">No state</MovieTittle>
      )}
    </>
  );
};

const StuffPage = ({ setIsLoading, ErrorHandler, history }) => {
  let { id } = useParams();
  const [state, setState] = useState([]);
  const request = history.location.page; //current request

  useEffect(() => {
    if (!id) return;
    setIsLoading(true); //spiner on

    doFetch("getCast", { id })
      .then((data) => setState(data))
      .catch((error) => {
        ErrorHandler(error, history);
      })
      .finally(setIsLoading(false));
  }, [id, setIsLoading, setState, history, ErrorHandler]);

  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        <PageMarkup currentArray={state[request]} />
      </Container>
    </ComponentWrapper>
  );
};

export default withData(StuffPage);
