import React, { memo, useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import useLoading from "../../Hooks/useLoading";
import { getMovieByGenre } from "../services/API/api";
import { useCategoryesContext } from "../services/Contexts/CategoryesContext";
import { useData } from "../services/Contexts/DataContext";
import CategoryeButtons from "../structure/Buttons/CategoryeButtons";
import List from "../structure/List/List";

const Categoryes = () => {
  const [state] = useData(null);
  const [{ moviesByCategorye, currentCategoryePage }, setState] = useData(null);

  const [categoryes] = useState([]);
  const [{ categoryeId }] = useCategoryesContext();

  const moviesByCategoryeFetched = useLoading(getMovieByGenre, {
    genre: categoryeId,
    page: currentCategoryePage,
  }); //Uploading data on scroll
  const { path } = useRouteMatch();

  useEffect(() => {
    if (!categoryeId) return;
    setState((prev) => ({ ...prev, isLoading: true }));

    getMovieByGenre({ genre: categoryeId }).then((response) => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        canShowTrending: false,
        moviesByCategorye: response,
        currentSection: `${path}`,
        currentCategoryePage: 2,
      }));
    });
  }, [categoryeId, setState]);
  useEffect(() => {
    if (!moviesByCategoryeFetched.length) return;
    setState((prev) => ({
      ...prev,
      moviesByCategorye: [
        ...prev.moviesByCategorye,
        ...moviesByCategoryeFetched,
      ],
      currentCategoryePage: prev.currentCategoryePage + 1,
    }));
  }, [moviesByCategoryeFetched]);
  return (
    <>
      {categoryes && (
        <>
          <CategoryeButtons />
          {/* {moviesByCategorye && <List dataMovies={state.categorye} />} */}
          {moviesByCategorye && <List dataMovies={moviesByCategorye} />}
        </>
      )}
    </>
  );
};

export default memo(Categoryes);
