import React from "react";
import List from "./List/List";
import { Container } from "./stylredComponents/stiledComponents";

const Gallery = ({ dataMovies, childern }) => (
  <Container>
    {dataMovies ? <List dataMovies={dataMovies} /> : childern};
  </Container>
);
export default Gallery;
