import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useLoading from "../../Hooks/useLoading";
import { getMovieByTitle } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import Form from "../structure/Form/Form";
import Gallery from "../structure/Gallery";

const SearchMovie = () => {
  const { search: searchQuery, pathname } = useLocation();
  const [findedMovies, setFindedMovies] = useState([]);
  const [, setState] = useData();
  const { path } = useRouteMatch();
  // const moviesByCategoryeFetched = useLoading(getMovieByTitle); //Uploading data on scroll

  useEffect(() => {
    if (!searchQuery) return;

    setState((prev) => ({ ...prev, isLoading: true }));
    getMovieByTitle({ searchQuery, page: 1 })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          currentHomePage: 2,
          currentSection: `${path}`,
        }));
        setFindedMovies(response);
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.response.data,
        }));
        throw new Error(error.response.data);
      });
  }, [searchQuery]);

  // useEffect(() => {
  //   if (!moviesByCategoryeFetched.length) return;

  //   setFindedMovies((prev) => [...prev, ...moviesByCategoryeFetched]);

  //   // ste page pridumat`
  //   // setState((prev) => ({
  //   // ...prev,
  //   // trendingMovies: [...prev.trendingMovies, ...moviesByCategoryeFetched],
  //   // currentHomePage: prev.currentHomePage + 1,
  //   // }));
  // }, [moviesByCategoryeFetched]);

  return (
    <>
      <Form />
      <Gallery dataMovies={findedMovies} />
    </>
  );
};

export default SearchMovie;
