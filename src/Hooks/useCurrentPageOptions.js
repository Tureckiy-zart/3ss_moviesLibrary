import { useLocation, useRouteMatch } from "react-router";
import { useData } from "../Components/services/Contexts/DataContext";

export const useCurrentPageOptions = () => {
  const { search: searchQuery, categoryeId } = useLocation(), //get Id & searchQuery from url (slug)
    { path } = useRouteMatch();
  const [
    {
      currentCategoryePage,
      currentSearchMoviePage,
      currentHomePage,
      currentSearchCollection,
    },
  ] = useData();

  switch (path) {
    case "/searchMovie":
      return {
        currnentPage: "currentSearchMoviePage",
        apiRequest: "getMovieByTitle",
        moviesCategory: "searchMovies",
        searchQuery,
        page: currentSearchMoviePage,
      };

    case "/categoryes":
      return {
        currnentPage: "currentCategoryePage",
        apiRequest: "getMovieByGenre",
        moviesCategory: "moviesByCategorye",
        genre: categoryeId,
        page: currentCategoryePage,
      };
    case "/searchCollection":
      return {
        currnentPage: "currentSearchCollection",
        apiRequest: "getCollectionId",
        moviesCategory: "searchCollection",
        searchQuery,
        page: currentSearchCollection,
      };

    default:
      return {
        currnentPage: "currentHomePage",
        apiRequest: "getTrending",
        moviesCategory: "trendingMovies",
        page: currentHomePage,
      };
  }
};
