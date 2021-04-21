import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCurrnetCollection } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import List from "../../structure/List/List";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";

const CurrnetCollection = () => {
  const [, setIsLoading] = useLoader();
  const { id } = useParams(0); // from url
  const [, setState] = useData();
  const [{ parts }, setCollecton] = useState([]);
console.log('id :>> ', id);
  useEffect(
    () => getCurrnetCollection(id, setCollecton, setState, setIsLoading),
    [id]
  );

  return (
    <>
      {parts && (
        <ComponentWrapper grid="grid" position="relative" top="125px">
          <Container>
            <List dataMovies={parts} />
          </Container>
        </ComponentWrapper>
      )}
    </>
  );
};

export default CurrnetCollection;
