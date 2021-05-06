import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import useScrollPage from "../../Hooks/useScrollPage";
import { ErrorHandler } from "../services/API/getData";
import { useData } from "../services/Contexts/DataContext";
import { useLoader } from "../services/Contexts/LoaderContext";
import Gallery from "../structure/Gallery";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { BannerForm } from "../structure/Form/ExportsForm";
import { doFetch } from "../services/API/api";
import NotFound from "../structure/NotFound";

const SearchMovie = () => {
  const { search: searchQuery } = useLocation();

  const history = useHistory();
  const [{ searchMovies }, setState] = useData();
  const [, setIsLoading] = useLoader();
  useScrollPage();

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true);
    setTimeout(() => {
      doFetch("getMovieByTitle", { searchQuery })
        .then(({ results }) =>
          setState((prev) => ({
            ...prev,
            searchMovies: results,
            currentSearchMoviePage: 2,
          }))
        )
        .catch((error) => {
          ErrorHandler(error, history);
        })
        .finally(setIsLoading(false));
    }, 1000);

    // doFetch("getMovieByTitle", { searchQuery })
    //   .then(({ results }) =>
    //     setState((prev) => ({
    //       ...prev,
    //       searchMovies: results,
    //       currentSearchMoviePage: 2,
    //     }))
    //   )
    //   .catch((error) => {
    //     ErrorHandler(error, history);
    //   })
    //   .finally(setIsLoading(false));
  }, [searchQuery, setState, setIsLoading, history]);

  return (
    <>
      {searchMovies.length > 0 ? (
        <ComponentWrapper as="main" grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem">
            <BannerForm />
          </Container>
          <Gallery dataMovies={searchMovies} />
        </ComponentWrapper>
      ) : (
        <NotFound>
          <BannerForm />
        </NotFound>
      )}
    </>
  );
};

export default SearchMovie;
