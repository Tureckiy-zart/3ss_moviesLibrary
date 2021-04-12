import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useLoading from "../../Hooks/useLoading";
import { getMovieByTitle } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import { useLoader } from "../services/Contexts/LoaderContext";
import Gallery from "../structure/Gallery";
import { Container } from "../structure/stylredComponents/stiledComponents";

const SearchMovie = () => {
  const { search: searchQuery, pathname } = useLocation();
  const [findedMovies, setFindedMovies] = useState([]);
  const [, setState] = useData();
  const { path } = useRouteMatch();
  // const moviesByCategoryeFetched = useLoading(getMovieByTitle); //Uploading data on scroll
  const [, setIsLoading] = useLoader();

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true);
    getMovieByTitle({ searchQuery, page: 1 })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          currentHomePage: 2,
          currentSection: `${path}`,
        }));
        setIsLoading(false);
        setFindedMovies(response);
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          error: error.response.data,
        }));
        setIsLoading(false);

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
    <Container>
      {findedMovies && <Gallery dataMovies={findedMovies} />}
    </Container>
  );
};

export default SearchMovie;
