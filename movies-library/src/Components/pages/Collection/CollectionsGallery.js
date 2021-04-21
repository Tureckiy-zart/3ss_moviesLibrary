import { nanoid } from "nanoid";
import React from "react";
import { StyledGalleryList } from "../../structure/stylredComponents/List.styled";
import CollectionsList from "./CollectionsList";

const CollectionsGallery = ({ collections }) => {
  return (
      <StyledGalleryList>
        {collections.map((item) => (
          <CollectionsList key={nanoid(5)} item={item} />
        ))}
      </StyledGalleryList>
  );
};

export default CollectionsGallery;
