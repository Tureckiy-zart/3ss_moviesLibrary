import styled from "styled-components";
import { randomInRange } from "../../heplers/heplers";
import headerImg_01 from "../../../img/headerImg/headerImg_01.jpg";
import headerImg_02 from "../../../img/headerImg/headerImg_02.jpg";
import headerImg_03 from "../../../img/headerImg/headerImg_03.jpg";
import headerImg_04 from "../../../img/headerImg/headerImg_04.jpg";
import headerImg_05 from "../../../img/headerImg/headerImg_05.jpg";
import headerImg_06 from "../../../img/headerImg/headerImg_06.jpg";
import headerImg_07 from "../../../img/headerImg/headerImg_07.jpg";
import headerImg_08 from "../../../img/headerImg/headerImg_08.jpg";
import BanerTitle from "./BanerTitle";
import SearchForm from "../Form/Form";
import { images, randomImageIndex } from "./BanerImaes";
const Wrapper = styled.div`
  /* position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%); */
  /* width: 100%; */
  display: grid;
  place-items: center;
`;
const BanerImg = styled.div`
  position: fixed;
  top: 100px;
  width: 1400px;
  height: 600px;
  background-image: url(${images[randomImageIndex]});
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  outline: none;
  left: 50%;
  transform: translateX(-50%);
`;

const Banner = () => {
  return (
    <BanerImg>
      <BanerTitle />
      <Wrapper>
        <SearchForm queryLocation={"Movie"} />
      </Wrapper>
    </BanerImg>
  );
};

export default Banner;
