import { useCallback, useEffect, useState } from "react";
import { useData } from "../Components/services/Contexts/DataContext";

const useLoading = (apiRequest, options) => {
  const [{ currentPage }, setState] = useData(); //global state
  const [isFetching, setisFetching] = useState(false);
  const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);
  const [a, b] = useState([]);

  console.log("currentPage useLoading :>> ", currentPage);

  useEffect(() => {
    if (!isFetching) return;
    setState((prev) => ({ ...prev, isLoading: true }));

    apiRequest({ ...options, page: currentPage })
      .then((response) => {
        //write to the state of the loaded data
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
        // setMoviesByCategoryeFetched((prev) => [...prev, ...response]);
        setMoviesByCategoryeFetched(response);
        // b(p=>[a])
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.response.data,
        }));
        throw new Error(error.response.data);
      })
      .finally(() => {
        setisFetching(false);
      });
  }, [isFetching, apiRequest, currentPage, setState]);

  useEffect(() => {
    if (moviesByCategoryeFetched) {
      setState((prev) => {
        // if(prev)
        return {
          ...prev,
          currentPage: prev.currentPage + 1,
        };
      });

      // setMoviesByCategorye((prev) => [...prev, ...moviesByCategoryeFetched]);
    }
  }, [moviesByCategoryeFetched]);

  const scrollCalculate = useCallback(({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 150) return true;
  }, []);
  const scrollHandler = useCallback(
    ({ target }) => {
      //server request permission
      if (!scrollCalculate({ target })) return;
      setisFetching(true);
      return;
    },
    [scrollCalculate]
  );
  useEffect(() => {
    //scroll listener
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return moviesByCategoryeFetched;
};

export default useLoading;
