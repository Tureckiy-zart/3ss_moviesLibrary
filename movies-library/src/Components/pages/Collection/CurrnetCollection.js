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

// useEffect(() => {
//   if (!id) return;
//   setIsLoading(true);
//   const IdParsed = parseInt(id);
//   getCollection(IdParsed) //get CurrnetCollection by ID
//     .then((response) => {
//       setCollecton(response);
//       setState((prev) => ({
//         ...prev,
//         currentCollectonPage: 2,
//       }));
//       setIsLoading(false);
//     })
//     .catch((error) => {
//       setState((prev) => ({
//         ...prev,
//         error: error.response.data,
//       }));
//       setIsLoading(false);
//       throw new Error(error.response.data);
//     });
// }, [id]);
