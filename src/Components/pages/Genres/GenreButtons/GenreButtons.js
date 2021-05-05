import React, { useEffect, useState } from "react";
import { doFetch } from "../../../services/API/api";
import {
  ComponentWrapper,
  Container,
} from "../../../structure/stylredComponents/stiledComponents";
import ButtonList from "./ButtonList";

const CategoryeButtons = () => {
  const [categoryes, setCategoryes] = useState([]);
  useEffect(
    () => doFetch("getGenres").then(({ genres }) => setCategoryes(genres)),
    []
  ); //set categoryes on mount
  return (
    <>
      {categoryes && (
        <ComponentWrapper>
          <Container>
            <ButtonList categoryes={categoryes} />
          </Container>
        </ComponentWrapper>
      )}
    </>
  );
};

export default CategoryeButtons;
