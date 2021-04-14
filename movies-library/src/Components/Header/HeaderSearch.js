import React from "react";
import SerchForm from "../structure/Form/Form";
import headerImg_01 from "../../img/headerImg/headerImg_01.jpg";
import headerImg_02 from "../../img/headerImg/headerImg_02.jpg";
import headerImg_03 from "../../img/headerImg/headerImg_03.jpg";
import headerImg_04 from "../../img/headerImg/headerImg_04.jpg";
import headerImg_05 from "../../img/headerImg/headerImg_05.jpg";
import headerImg_06 from "../../img/headerImg/headerImg_06.jpg";
import headerImg_07 from "../../img/headerImg/headerImg_07.jpg";
import headerImg_08 from "../../img/headerImg/headerImg_08.jpg";
import styled from "styled-components";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { nanoid } from "nanoid";
import Title from "../structure/stylredComponents/Title/Title";

const ImageVrapper = styled.div`
  text-align: center;
`;
const FormWrapper = styled.div`
  position: relative;
  bottom: 140px;
  /* margin-bottom:4rem; */
`;
const MainTitle = styled.h2`
  position: absolute;
  font-size: 3em;
  font-weight: 700;
  line-height: 1;
  bottom: 250px;
`;
const SubTitle = styled.h2`
  position: absolute;
  font-size: 2em;
  font-weight: 600;
  bottom: 130px;
`;

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
const randomImageIndex = (min = 0, max = images.length - 1) =>
  Math.round(Math.random() * (max - min) + min);

const HeaderSearch = () => {
  return (
    <ComponentWrapper>
      <ImageVrapper>
        <img alt={nanoid(5)} src={images[randomImageIndex()]} />
      </ImageVrapper>
      <Container>
        <FormWrapper>
          <SerchForm queryLocation={"Movie"} />
          <Title>
            <MainTitle>Welcome.</MainTitle>
            <SubTitle>Millions of movies. Explore now.</SubTitle>
          </Title>
        </FormWrapper>
      </Container>
    </ComponentWrapper>
  );
};
export default HeaderSearch;
