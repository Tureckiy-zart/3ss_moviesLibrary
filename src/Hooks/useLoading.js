import { useCallback, useEffect, useState } from "react";
import { getDataOnLoad } from "../Components/services/API/getData";
import { useLoader } from "../Components/services/Contexts/LoaderContext";
import useCurrentPage from "./useCurrentPage";

const useLoading = (apiRequest, options) => {
  const [, setIsLoading] = useLoader(false);
  const [isFetching, setisFetching] = useState(false);

  const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);
  const currnetPage = useCurrentPage();

  useEffect(
    () =>
      getDataOnLoad({
        apiRequest,
        options,
        isFetching,
        currnetPage,
        setMoviesByCategoryeFetched,
        setisFetching,
      }),
    [isFetching, setIsLoading, apiRequest]
    // [isFetching, setIsLoading, apiRequest, options, currnetPage]
  ); //if put here currnetPage page incraasing 2 times each time

  const scrollCalculate = useCallback(({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 100) setisFetching(true); // allow to make api raquest
    return;
  }, []);

  useEffect(() => {
    //scroll listener
    document.addEventListener("scroll", scrollCalculate);
    return function () {
      document.removeEventListener("scroll", scrollCalculate);
    };
  }, [scrollCalculate]);
  console.log("currnetPage :>> ", currnetPage);
  return moviesByCategoryeFetched;
};

export default useLoading;
