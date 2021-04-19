import React, { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../Hooks/useScrollPage";
import { getSearchData } from "../services/API/getData";
import { useData } from "../services/Contexts/DataContext";
import { useLoader } from "../services/Contexts/LoaderContext";
import Gallery from "../structure/Gallery";
import { Container } from "../structure/stylredComponents/stiledComponents";
import { MovieTittle } from "../structure/stylredComponents/Title.styled";
import MostPopular from "./MostPopular";

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
          <MovieTittle marginBottom="2rem">Nothing found.</MovieTittle>
          <MostPopular />
        </Container>
      )}
    </>
  );
};

export default SearchMovie;
