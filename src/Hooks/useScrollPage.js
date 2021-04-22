import { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import {
  getMovieByGenre,
  getMovieByTitle,
  getTrendingMovies,
} from "../Components/services/API/api";
import { useData } from "../Components/services/Contexts/DataContext";
import useLoading from "./useLoading";

function currentPageOptions(searchQuery, categoryeId, path) {
  switch (path) {
    case "/searchMovie":
      return {
        currnentPage: "currentSearchMoviePage",
        apiRequest: getMovieByTitle,
        moviesCategory: "searchMovies",
        params: { searchQuery },
      };

    case "/categoryes":
      return {
        currnentPage: "currentCategoryePage",
        apiRequest: getMovieByGenre,
        moviesCategory: "moviesByCategorye",
        params: { genre: categoryeId },
      };

    default:
      return {
        currnentPage: "currentHomePage",
        apiRequest: getTrendingMovies,
        moviesCategory: "trendingMovies",
        params: {},
      };
  }
}

const useScrollPage = () => {
  const { search: searchQuery, categoryeId } = useLocation(), //get Id & searchQuery from url (slug)
    { path } = useRouteMatch();

  const [, setState] = useData();

  const {
    currnentPage,
    moviesCategory,
    apiRequest,
    params,
  } = currentPageOptions(searchQuery, categoryeId, path);

  const moviesByCategoryeFetched = useLoading(apiRequest, params); //Uploading data on scrollPage

  useEffect(() => {
    if (!moviesByCategoryeFetched.length) return;

    setState((prev) => {
      return {
        ...prev,
        [moviesCategory]: [
          ...prev[moviesCategory],
          ...moviesByCategoryeFetched,
        ],
        [currnentPage]: prev[currnentPage] + 1,
      };
    });
  }, [
    moviesByCategoryeFetched,
    currnentPage,
    moviesCategory,
    setState,
  ]);
  // console.log("state :>> ", state);
};
export default useScrollPage;
