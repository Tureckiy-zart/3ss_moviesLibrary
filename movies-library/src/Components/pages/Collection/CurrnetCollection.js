import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCurrnetCollection } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import List from "../../structure/List/List";

const CurrnetCollection = () => {
  const [, setIsLoading] = useLoader();
  const { id } = useParams(0); // from url
  const [, setState] = useData();
  const [{ parts }, setCollecton] = useState([]);

  useEffect(
    () => getCurrnetCollection(id, setCollecton, setState, setIsLoading),
    [id]
  );

  return <>{parts && <List dataMovies={parts} />}</>;
};

export default CurrnetCollection;
