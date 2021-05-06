import React from "react";
import MostPopular from "../pages/MostPopular";
import {
  ComponentWrapper,
  Container,
} from "./stylredComponents/stiledComponents";
import { MovieTittle } from "./stylredComponents/Title.styled";

const NotFound = ({ children }) => (
  <ComponentWrapper as="main" grid="grid" position="relative" top="125px">
    <Container display="flex" marginBottom="2rem" flexDirection="column">
      {children}
      <MovieTittle margin="2rem">Nothing found.</MovieTittle>
    </Container>

    <MostPopular />
  </ComponentWrapper>
);

export default NotFound;
