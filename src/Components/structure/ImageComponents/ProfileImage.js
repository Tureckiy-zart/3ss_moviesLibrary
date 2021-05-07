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
            : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
        }
        alt={name ? name : "No-name"}
      />
      {children}
    </ImgWrapper>
  );
};

export default ProfileImage;
