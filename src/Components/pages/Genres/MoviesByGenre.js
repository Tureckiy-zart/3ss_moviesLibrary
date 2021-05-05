import React, { useEffect } from "react";
import { useLocation } from "react-router";
import useScrollPage from "../../../Hooks/useScrollPage";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import CategoryeButtons from "./GenreButtons/GenreButtons";
import GenresGallery from "./GenresGallery";

const MoviesByGenre = ({
  state,
  setState,
  setIsLoading,
  ErrorHandler,
  history,
}) => {
  const { categoryeId } = useLocation(null); //get Id from url (slug)
  const { moviesByCategorye } = state;

  useEffect(() => {
    if (!categoryeId) return;
    setIsLoading(true);
    doFetch("getMovieByGenre", { genre: categoryeId })
      .then(({ results }) => {
        setState((prev) => ({
          ...prev,
          moviesByCategorye: results,
          currentCategoryePage: 2,
        }));
      })
      .catch((error) => {
        ErrorHandler(error, history);
      })
      .finally(setIsLoading(false));
  }, [categoryeId, setState, setIsLoading, history, ErrorHandler]);

  useScrollPage();

  return (
    <ComponentWrapper position="relative" top="125px">
      <CategoryeButtons />
      <GenresGallery moviesByCategorye={moviesByCategorye} />
    </ComponentWrapper>
  );
};

export default withData(MoviesByGenre);
