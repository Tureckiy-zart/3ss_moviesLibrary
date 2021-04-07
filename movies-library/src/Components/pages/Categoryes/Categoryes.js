import React, { memo, useCallback, useEffect, useState } from "react";
import useLoading from "../../../Hooks/useLoading";
import {
  getGenres,
  getMovieByGenre,
  getMovieByGenre2,
} from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import { Button } from "../../structure/Buttons/Button.styled";
import List from "../../structure/List/List";

const Categoryes = () => {
  const [, setState] = useData(null);
  const [categoryes, setCategoryes] = useState([]);
  const [categoryeId, setCategoryeId] = useState(0);
  const [moviesByCategorye, setMoviesByCategorye] = useState([]);
  const [
    steCurrentPage,
    moviesByCategoryeFetched,
  ] = useLoading(getMovieByGenre2, { genre: categoryeId, page: 1 }); //Uploading data on scroll

  useEffect(() => getGenres().then((response) => setCategoryes(response)), []);
  useEffect(() => {
    setState((prev) => ({ ...prev, isLoading: true }));

    getMovieByGenre2({ genre: categoryeId }).then(
      // getMovieByGenre(categoryeId).then(
      (response) => setMoviesByCategorye(response),
      setState((prev) => ({
        ...prev,
        isLoading: false,
      })),
      steCurrentPage((prev) => prev + 1) //page enlargement
    );
  }, [categoryeId]);
  useEffect(() => {
    if (moviesByCategorye.length) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        canShowTrending: false,
      }));
    }
  }, [moviesByCategorye]);
  useEffect(() => {
    if (moviesByCategoryeFetched.length) {
      setMoviesByCategorye((prev) => [...prev, ...moviesByCategoryeFetched]);
    }
  }, [moviesByCategoryeFetched]);

  return (
    <>
      {categoryes && (
        <>
          <ul>
            {categoryes.map(({ id, name }) => (
              <Button onClick={() => setCategoryeId(id)}>{name}</Button>
            ))}
          </ul>
          {moviesByCategorye && <List dataMovies={moviesByCategorye} />}
        </>
      )}
    </>
  );
};

export default memo(Categoryes);
