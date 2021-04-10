import React from "react";
import List from "./List/List";
import { Container } from "./stiledComponents";

const Gallery = ({ dataMovies }) => (
  <Container>
    <List dataMovies={dataMovies} />;
  </Container>
);
export default Gallery;








