import React, { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../Hooks/useScrollPage";
import { getSearchData } from "../services/API/getData";
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

const SearchMovie = () => {
  const { search: searchQuery } = useLocation();
  const [{ searchMovies }, setState] = useData();
  const { path } = useRouteMatch();
  const [, setIsLoading] = useLoader();
  useScrollPage();
  useEffect(() => getSearchData(searchQuery, setState, setIsLoading, path), [
    searchQuery,
    setState,
    setIsLoading,
    path,
  ]);

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
