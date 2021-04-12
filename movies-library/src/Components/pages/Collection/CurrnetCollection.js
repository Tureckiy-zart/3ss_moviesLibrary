import React, { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { getCollection } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import List from "../../structure/List/List";

const CurrnetCollection = () => {
  const [, setIsLoading] = useLoader();
  const { path } = useRouteMatch();
  const { id } = useParams(0);  // from url 
  const [, setState] = useData();
  const [collecton, setCollecton] = useState([]);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    const IdParsed = parseInt(id);
    getCollection(IdParsed)   //get CurrnetCollection by ID
      .then((response) => {
        setCollecton(response);
        setState((prev) => ({
          ...prev,
          currentCollectonPage: 2,
          currentSection: `${path}`,
        }));
        setIsLoading(false);
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          error: error.response.data,
        }));
        setIsLoading(false);
        throw new Error(error.response.data);
      });
  }, [id]);

  return <>{collecton && <List dataMovies={collecton.parts} />}</>;
};

export default CurrnetCollection;
