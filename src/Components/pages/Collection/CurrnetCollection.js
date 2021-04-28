import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { doFetch } from "../../services/API/api";
import { errorHandler } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import List from "../../structure/List/List";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";

const CurrnetCollection = () => {
  const history = useHistory();
  const [, setIsLoading] = useLoader();
  const { id } = useParams(0); // from url
  const [, setState] = useData();
  const [{ parts }, setCollecton] = useState([]);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    doFetch("getCurrnetCollection", { id })
      .then((response) => {
        setCollecton(response);
        setState((prev) => ({
          ...prev,
          currentCollectonPage: 2,
        }));
      })
      .catch((error) => {
        errorHandler(error, setState, history);
      })
      .finally(setIsLoading(false));
  }, [id, setState, setIsLoading, history]);

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
