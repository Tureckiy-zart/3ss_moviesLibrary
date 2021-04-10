import React, { memo, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
// import queryString from "query-string";
import useLoading from "../../Hooks/useLoading";
import { getMovieByGenre } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import CategoryeButtons from "../structure/Buttons/CategoryeButtons";
import List from "../structure/List/List";
// const queryString = require("query-string");
const MoviesByCategoryes = (props) => {
  // console.log('props :>> ', props);
  const { categoryeId } = useLocation();
  const { path } = useRouteMatch();

  // const [state] = useData(null);
  const [{ moviesByCategorye, currentCategoryePage }, setState] = useData(null);

  // const [{ categoryeId }] = useCategoryesContext();

  const moviesByCategoryeFetched = useLoading(getMovieByGenre, {
    genre: categoryeId,
    page: currentCategoryePage,
  }); //Uploading data on scroll
  // console.log("categoryeId :>> ", categoryeId);

  useEffect(() => {
    if (!categoryeId) return;
    setState((prev) => ({ ...prev, isLoading: true }));
    getMovieByGenre({ genre: Number(categoryeId) }).then((response) => {
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
  {
    /* {categoryes && ( */
  }
  return (
    <>
      <>
        <CategoryeButtons />
        {moviesByCategorye && <List dataMovies={moviesByCategorye} />}
      </>
    </>
  );
};
// )}

export default memo(MoviesByCategoryes);
