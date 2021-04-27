import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  StyledGalleryListItem,
} from "../stylredComponents/List.styled";
import Title, {
  MovieTittle,
  AdditionText,
} from "../stylredComponents/Title.styled";
import { StyledNavLink } from "../stylredComponents/Navigation.styled";
import { getDate } from "../../heplers/heplers";
import FavoritesBtns from "../../pages/Favorites/FavoritesBtns";

const buttonStyles = {
  position: "absolute",
  top: "30px",
  right: "40px",
};

function ListItem({ item }) {
  const { location } = useHistory();
  const {
    id = null,
    title = "",
    name = "",
    original_title = "",
    vote_average = 0,
    poster_path = "",
    release_date = "",
    popularity = 0,
  } = item;
  // console.log('item :>> ', item);
  const releaseDate = getDate(release_date);

  return (
    <StyledGalleryListItem>
      <ImageWrapper>
        <StyledNavLink
          to={{
            pathname: `/asset/${id}`,
            hash: `#${original_title ? original_title : name}`,
            state: { from: location },
          }}
        >
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w154/${poster_path}`
                : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
            }
            alt={title ? title : name}
            // width="154"
          />
        </StyledNavLink>

        <FavoritesBtns styles={buttonStyles} item={item} />
      </ImageWrapper>

      <InfoWrapper>
        <Title color="black">
          <MovieTittle>{original_title ? original_title : name}.</MovieTittle>
          {vote_average && vote_average !== 0 && (
            <AdditionText>Votes: {vote_average}</AdditionText>
          )}
          {release_date && (
            <AdditionText>Release Date: {releaseDate}</AdditionText>
          )}
          {popularity && (
            <AdditionText>Popularity: {parseInt(popularity)}</AdditionText>
          )}
        </Title>
      </InfoWrapper>
    </StyledGalleryListItem>
  );
}
export default memo(ListItem);
