import React from "react";
import List from "./List/List";
import {
  BackgroundColorWrapper,
  ComponentWrapper,
  Container,
} from "./stylredComponents/stiledComponents";

const Gallery = ({ dataMovies, childern }) => (
  <BackgroundColorWrapper>
    <ComponentWrapper position="relative" top="620px" pdaiing='10px'>
      {/* <ComponentWrapper backgroundColor='white'> */}
      <Container>
        {dataMovies ? <List dataMovies={dataMovies} /> : childern}
      </Container>
    </ComponentWrapper>
  </BackgroundColorWrapper>
);
export default Gallery;
