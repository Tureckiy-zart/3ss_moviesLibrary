import React from "react";
import { GoHomeBtn } from "../structure/Buttons/ButtonsHistoryReturn";
import {
  CenteredImg,
  ImageWrapper,
} from "../structure/stylredComponents/List.styled";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import MostPopular from "./MostPopular";
import error404 from '../../img/error 404.jpg'

function ErrorPage() {
  return (
    <ComponentWrapper position="relative" top="150px">
      <Container>
        <ImageWrapper>
          <GoHomeBtn />
          <CenteredImg src={error404} />
        </ImageWrapper>

        <MostPopular />
      </Container>
    </ComponentWrapper>
  );
}
export default ErrorPage;
