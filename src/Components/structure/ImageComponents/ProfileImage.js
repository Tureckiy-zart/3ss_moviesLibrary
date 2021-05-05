import React from "react";
import { Image } from "../stylredComponents/List.styled";
import { ImgWrapper } from "../stylredComponents/MovieDetailsPage.styled";

const ProfileImage = ({
  profile_path = "",
  poster_path = "",
  name = '',
  children,
}) => {
  return (
    <ImgWrapper>
      <Image
        src={
          profile_path || poster_path
            ? `https://image.tmdb.org/t/p/w154${profile_path || poster_path}`
            : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
        }
        alt={name ? name : "No-name"}
      />
      {children}
    </ImgWrapper>
  );
};

export default ProfileImage;
