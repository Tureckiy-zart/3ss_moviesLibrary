import React, { useEffect, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../Hooks/useScrollPage";
import useLoading from "../../Hooks/useLoading";
import { getMovieByTitle } from "../services/API/api";
import { getSearchData } from "../services/API/getData";
import { useData } from "../services/Contexts/DataContext";
import { useLoader } from "../services/Contexts/LoaderContext";
import Gallery from "../structure/Gallery";
import { Container } from "../structure/stylredComponents/stiledComponents";
import { MovieTittle } from "../structure/stylredComponents/Title.styled";

const SearchMovie = () => {
  const { search: searchQuery } = useLocation();
  const [{ searchMovies }, setState] = useData();
  const { path } = useRouteMatch();
  const [, setIsLoading] = useLoader();
  useScrollPage();
  useEffect(() => getSearchData(searchQuery, setState, setIsLoading, path), [
    searchQuery,
  ]);

  return (
    <>
      {searchMovies.length > 0 ? (
        <Gallery dataMovies={searchMovies} />
      ) : (
        <Container>
          <MovieTittle marginBottom="2rem">Nothing found.</MovieTittle>{" "}
        </Container>
      )}
    </>
  );
};

export default SearchMovie;


  // const moviesByCategoryeFetched = useLoading(getMovieByTitle, {
  //   searchQuery,
  // }); //Uploading data on scrollPage
  // useEffect(
  //   () =>
  //     getSearchData(searchQuery, setState, setIsLoading, path, setFindedMovies),
  //   [searchQuery]
  // );

  // useEffect(() => {
  //   if (!moviesByCategoryeFetched.length) return;
  //   setFindedMovies((prev) => [...prev, ...moviesByCategoryeFetched]);

  //   setState((prev) => ({
  //     ...prev,
  //     currentSearchMoviePage: prev.currentSearchMoviePage + 1,
  //   }));
  // }, [moviesByCategoryeFetched]);