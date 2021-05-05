import React from "react";
import ProfileImage from "../../structure/ImageComponents/ProfileImage";
import { Image } from "../../structure/stylredComponents/List.styled";
import { ImgWrapper } from "../../structure/stylredComponents/MovieDetailsPage.styled";
import { MovieTittle } from "../../structure/stylredComponents/Title.styled";
import FavoritesBtns from "../Favorites/FavoritesBtns";
const buttonStyles = {
  position: "absolute",
  top: "35px",
  right: "60px",
};
const ImageBlock = (movieDetails) => {
  return (
    <div>
      <ProfileImage
        poster_path={movieDetails.poster_path}
        name={movieDetails.name}
      >
        <FavoritesBtns styles={buttonStyles} item={movieDetails} />
        <MovieTittle marginBottom="0">{movieDetails.title}</MovieTittle>
      </ProfileImage>
    </div>
  );
};

export default ImageBlock;
