import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import ProfileImage from "../../structure/ImageComponents/ProfileImage";
import {
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
              ({
                credit_id,
                job,
                character,
                profile_path,
                name,
                popularity,
              }) => (
                <StyledNavLink
                  key={nanoid(5)}
                  to={{
                    pathname: `/asset/person/${name}`,
                    search: `${credit_id}`,
                    // state: { from: history.location },
                  }}
                >
                  <StyledGalleryListItem>
                    <ProfileImage profile_path={profile_path} name={name} />

                    <InfoWrapper>
                      <MovieTittle>{name}</MovieTittle>
                      {job && <AdditionText>Job: {job}</AdditionText>}
                      {character && (
                        <AdditionText>Character: {character}</AdditionText>
                      )}
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
