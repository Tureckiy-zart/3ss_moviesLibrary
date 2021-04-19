import styled from "styled-components";
import { nanoid } from "nanoid";
import { randomInRange } from "../heplers/heplers";
// import headerImg_01 from "./headerImg/headerImg_01.jpg";
// import headerImg_02 from "./headerImg/headerImg_02.jpg";
// import headerImg_03 from "./headerImg/headerImg_03.jpg";
// import headerImg_04 from "./headerImg/headerImg_04.jpg";
// import headerImg_05 from "./headerImg/headerImg_05.jpg";
// import headerImg_06 from "./headerImg/headerImg_06.jpg";
// import headerImg_07 from "./headerImg/headerImg_07.jpg";
// import headerImg_08 from "./headerImg/headerImg_08.jpg";
import headerImg_01 from "../../img/headerImg/headerImg_01.jpg";
import headerImg_02 from "../../img/headerImg/headerImg_02.jpg";
import headerImg_03 from "../../img/headerImg/headerImg_03.jpg";
import headerImg_04 from "../../img/headerImg/headerImg_04.jpg";
import headerImg_05 from "../../img/headerImg/headerImg_05.jpg";
import headerImg_06 from "../../img/headerImg/headerImg_06.jpg";
import headerImg_07 from "../../img/headerImg/headerImg_07.jpg";
import headerImg_08 from "../../img/headerImg/headerImg_08.jpg";
const images = [
  headerImg_01,
  headerImg_02,
  headerImg_03,
  headerImg_04,
  headerImg_05,
  headerImg_06,
  headerImg_07,
  headerImg_08,
];
const randomImageIndex = randomInRange(0, images.length - 1);

const ImageWrapper = styled.div`
  /* display: grid;
  place-items: center;
  margin: 0 auto; */
  width: 100%;
  height:100px;

  /* background-image: url("'https://api.themoviedb.org/3/api_key=b10df2c9a5aac390aead1b7030414d18/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/kowTspKh9UkOVXnEvsZtZvp66AE.jpg')/kowTspKh9UkOVXnEvsZtZvp66AE.jpg"); */
  /* background: url(images[randomImageIndex); */
`;
console.log(`images[randomImageIndex]`, images[randomImageIndex]);
const Banner = () => {
  return (
    <ImageWrapper>
      {/* <Image /> */}
      <img alt={nanoid(5)} src={images[randomImageIndex]} />
      {/* <Image alt={nanoid(5)} src={images[randomImageIndex]} /> */}
    </ImageWrapper>
  );
};

export default Banner;
