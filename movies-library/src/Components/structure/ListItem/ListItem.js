import React, { memo } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { StyledGalleryListItem } from "../stylredComponents/LIst/List.styled";
import Title, {
  MovieTittle,
  AdditionText,
} from "../stylredComponents/Title/Title";
import { StyledNavLink } from "../stylredComponents/Navigation/Navigation.styled";
import { getDate } from "../../heplers/heplers";

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Image = styled.img`
  width: 16rem;
  height: 60%;
  border-radius: 30px 30px 0 0;
  margin-bottom: 1rem;
  overflow: hidden;
  min-height: 24rem;
`;
const InfoWrapper = styled.div`
  padding: 0 0.5rem;
`;

function ListItem({ item }) {
  //   console.log("location :>> ", location);
  const { location } = useHistory();
  const {
    id,
    title,
    name,
    original_title,
    vote_average,
    poster_path,
    backdrop_path,
    release_date,
    overview = "",
  } = item;
  const releaseDate = getDate(release_date);
  return (
    <StyledGalleryListItem>
      <StyledNavLink
        to={{
          pathname: `/asset/${id}`,
          hash: `#${original_title ? original_title : name}`,
          state: { from: location },
        }}
      >
        <ImageWrapper>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w154/${poster_path}`
                : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
            }
            alt={title ? title : name}
            // width="154"
          />
        </ImageWrapper>
        <InfoWrapper>
          <Title color="black">
            <MovieTittle>{original_title ? original_title : name}.</MovieTittle>
            {vote_average && <AdditionText>Votes: {vote_average}</AdditionText>}
            {release_date && (
              <AdditionText>Release Date: {releaseDate}</AdditionText>
            )}
          </Title>
          {location.pathname === "/searchCollection/" && overview && (
            <p> {overview}</p>
          )}
        </InfoWrapper>
      </StyledNavLink>
    </StyledGalleryListItem>
  );
}
export default memo(ListItem);
{
  /* <h2>{original_title ? original_title : name}</h2>}
            {vote_average && <h4> Votes: {vote_average}</h4>}
            {release_date && <h5>{releaseDate}</h5>} */
}
