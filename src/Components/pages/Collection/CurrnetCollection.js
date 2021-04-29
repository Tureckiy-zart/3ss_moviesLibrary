import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { doFetch } from "../../services/API/api";

import withData from "../../services/hoc/withFetch";
import List from "../../structure/List/List";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";

const CurrnetCollection = ({
  setIsLoading,
  setState,
  ErrorHandler,
  history,
}) => {
  const { id } = useParams(0); // from url
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
        ErrorHandler(error,  history);
      })
      .finally(setIsLoading(false));
  }, [id, setState, setIsLoading, history, ErrorHandler]);

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

export default withData(memo(CurrnetCollection));
