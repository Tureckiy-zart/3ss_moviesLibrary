import React from "react";
import Gallery from "../../structure/Gallery";
import MostPopular from "../MostPopular";

const GenresGallery = ({moviesByCategorye}) => {
  return (
    <>
      {moviesByCategorye.length > 0 ? (
        <Gallery dataMovies={moviesByCategorye} />
      ) : (
        <MostPopular />
      )}
    </>
  );
};

export default GenresGallery;
