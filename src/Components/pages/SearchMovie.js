import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import useScrollPage from "../../Hooks/useScrollPage";
import { errorHandler } from "../services/API/getData";
import { useData } from "../services/Contexts/DataContext";
import { useLoader } from "../services/Contexts/LoaderContext";
import Gallery from "../structure/Gallery";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { MovieTittle } from "../structure/stylredComponents/Title.styled";
import MostPopular from "./MostPopular";
import { BannerForm } from "../structure/Form/ExportsForm";
import { doFetch } from "../services/API/api";

const SearchMovie = () => {
  const { search: searchQuery } = useLocation();
  
  const history = useHistory();
  const [{ searchMovies }, setState] = useData();
  const [, setIsLoading] = useLoader();
  useScrollPage();
  
  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true);
    doFetch("getMovieByTitle", { searchQuery })
      .then(({ results }) =>
        setState((prev) => ({
          ...prev,
          searchMovies: results,
          currentSearchMoviePage: 2,
        }))
      )
      .catch((error) => {
        errorHandler(error, setState, history);
      })
      .finally(setIsLoading(false));
  }, [searchQuery, setState, setIsLoading, history]);

  return (
    <>
      {searchMovies.length > 0 ? (
        <ComponentWrapper grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem">
            <BannerForm />
          </Container>
          <Gallery dataMovies={searchMovies} />
        </ComponentWrapper>
      ) : (
        <ComponentWrapper grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem" flexDirection="column">
            <BannerForm />
            <MovieTittle margin="2rem">Nothing found.</MovieTittle>
          </Container>
          <MostPopular />
        </ComponentWrapper>
      )}
    </>
  );
};

export default SearchMovie;
