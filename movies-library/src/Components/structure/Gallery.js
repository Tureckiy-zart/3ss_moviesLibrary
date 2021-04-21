import React from "react";
import ScrollUpBtn from "./Buttons/ScrollUpBtn";
import List from "./List/List";
import {
  ComponentWrapper,
  Container,
} from "./stylredComponents/stiledComponents";

const Gallery = ({ dataMovies, childern }) => (
  <ComponentWrapper>
    <Container>
      {/* {childern} */}
      {dataMovies ? <List dataMovies={dataMovies} /> : childern}
      <ScrollUpBtn />

    </Container>
  </ComponentWrapper>
);
export default Gallery;
