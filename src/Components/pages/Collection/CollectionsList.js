import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  StyledGalleryListItem,
} from "../../structure/stylredComponents/List.styled";
import {
  InnerLink,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
} from "../../structure/stylredComponents/Title.styled";
import { trimmedString } from "../../heplers/heplers";

function CollectionsList({ item }) {
  const { location } = useHistory();
  const { id, title, name, original_title, poster_path, overview } = item;
  const trimmedOverview = trimmedString(overview);

  return (
    < >
        {item ? (
          <StyledGalleryListItem margin="6rem 0 0 0">
            <InnerLink
              to={{
                pathname: `/${"searchCollection"}/${id}`,
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
                />
              </ImageWrapper>

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
export default memo(CollectionsList);
