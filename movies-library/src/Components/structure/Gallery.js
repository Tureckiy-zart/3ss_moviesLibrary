import React from "react";
import List from "./List/List";
import { ComponentWrapper, Container } from "./stylredComponents/stiledComponents";

const Gallery = ({ dataMovies, childern }) => (
  <ComponentWrapper>
    <Container>
      {dataMovies ? <List dataMovies={dataMovies} /> : childern}
    </Container>
  </ComponentWrapper>
);
export default Gallery;
