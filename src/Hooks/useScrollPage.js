import { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import { useData } from "../Components/services/Contexts/DataContext";
import useLoading from "./useLoading";

function currentPageOptions(searchQuery, categoryeId, path) {
  switch (path) {
    case "/searchMovie":
      return {
        currnentPage: "currentSearchMoviePage",
        apiRequest: "getMovieByTitle",
        moviesCategory: "searchMovies",
        options: { searchQuery },
      };

    case "/categoryes":
      return {
        currnentPage: "currentCategoryePage",
        apiRequest: "getMovieByGenre",
        moviesCategory: "moviesByCategorye",
        options: { genre: categoryeId },
      };

    default:
      return {
        currnentPage: "currentHomePage",
        apiRequest: "getTrending",
        moviesCategory: "trendingMovies",
        options: {},
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
    options,
  } = currentPageOptions(searchQuery, categoryeId, path);

  const moviesByCategoryeFetched = useLoading(apiRequest, options); //Uploading data on scrollPage

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
  }, [moviesByCategoryeFetched, currnentPage, moviesCategory, setState]);
};
export default useScrollPage;
