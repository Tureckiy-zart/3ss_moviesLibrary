import React from "react";
import { useHistory } from "react-router-dom";
import {
  InfoWrapper,
  StyledGalleryListItem,
} from "../../structure/stylredComponents/List.styled";
import { InnerLink } from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../../structure/stylredComponents/Title.styled";
import { trimmedString } from "../../heplers/heplers";
import ProfileImage from "../../structure/ImageComponents/ProfileImage";

function CollectionsList({ item }) {
  const { location } = useHistory();
  const { id, title, name, original_title, poster_path, overview } = item;
  const trimmedOverview = trimmedString(overview);
  return (
    <>
      {item ? (
        <StyledGalleryListItem margin="6rem 0 0 0">
          <InnerLink
            to={{
              pathname: `/${"searchCollection"}/${id}`,
              hash: `#${original_title ? original_title : name}`,
              state: { from: location },
            }}
          >
            <ProfileImage poster_path={poster_path} name={name} />

            <InfoWrapper>
              <MovieTittle>
                {original_title ? original_title : name}
              </MovieTittle>
              <AdditionText> {trimmedOverview}</AdditionText>
            </InfoWrapper>
          </InnerLink>
        </StyledGalleryListItem>
      ) : (
        // FIX
        <MovieTittle marginBottom="2rem">Nothing found.</MovieTittle>
      )}
    </>
  );
}
export default CollectionsList;
