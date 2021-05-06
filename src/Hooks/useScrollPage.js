import { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import { doFetch } from "../Components/services/API/api";
import { ErrorHandler } from "../Components/services/API/getData";
import { useData } from "../Components/services/Contexts/DataContext";
import { useLoader } from "../Components/services/Contexts/LoaderContext";
import { useScrollCalculate } from "./useScrollCalculate";

const useCurrentPageOptions = () => {
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

const useScrollPage = () => {
  const [isFetching, setisFetching] = useScrollCalculate(),
    [, setIsLoading] = useLoader(false),
    [, setState] = useData();
  const apiRequestOptions = useCurrentPageOptions();
  const getDataOnLoad = async (apiRequestOptions) => {
    setIsLoading(true); //Spiner on
    try {
      const { results } = await doFetch(null, apiRequestOptions);
      const { moviesCategory, currnentPage } = apiRequestOptions;

      setState((prev) => {
        return {
          ...prev,
          [moviesCategory]: [...prev[moviesCategory], ...results],
          [currnentPage]: prev[currnentPage] + 1,
        };
      });
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false); //spiner off
      setisFetching(false);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isFetching) return;
    getDataOnLoad(apiRequestOptions);
  }, [isFetching]);
  /* eslint-enable react-hooks/exhaustive-deps */
};
export default useScrollPage;
