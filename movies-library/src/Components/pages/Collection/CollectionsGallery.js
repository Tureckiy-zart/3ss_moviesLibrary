import React from "react";
import { StyledGalleryList } from "../../structure/stylredComponents/List.styled";
import MostPopular from "../MostPopular";
import CollectionsList from "./CollectionsList";

const CollectionsGallery = ({ collections }) => {
    console.log('collections :>> ', collections);
  return (
    <>
      {collections.length > 0 ? (
        <StyledGalleryList>
          {collections.map((item) => (
            <CollectionsList item={item} />
          ))}
        </StyledGalleryList>
      ) : (
        <MostPopular />
      )}
    </>
  );
};

export default CollectionsGallery;
