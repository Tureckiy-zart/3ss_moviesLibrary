import { useEffect, useState } from "react";
import { useData } from "../Components/services/Contexts/DataContext";

const useLoading = (apiRequest, options) => {
  const [state, setState] = useData(); //global state
  const [currentPage, steCurrentPage] = useState(1);
  const [isFetching, setisFetching] = useState(false);
  const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);
  console.log("currentPage useLoading :>> ", currentPage);
  console.log("options :>> ", options);
  useEffect(() => {
    if (!isFetching) return;
    setState((prev) => ({ ...prev, isLoading: true }));

    apiRequest({ page: currentPage })
      .then((response) => {
        //write to the state of the loaded data
        setState((prev) => ({
          ...prev,
          isLoading: false,
          // trendingMovies: [...prev.trendingMovies, ...response],
        }));
        setMoviesByCategoryeFetched((prev) => [...prev, ...response]);
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
        console.log("currentPage inner:>> ", currentPage);
        steCurrentPage((prev) => prev + 1); //page enlargement
      });
    // }, [isFetching]);
  }, [isFetching, apiRequest]);
  useEffect(() => {
    //scroll listener
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = ({ target }) => {
    //server request permission
    if (!scrollCalculate({ target })) return;
    setisFetching(true);
    return;
  };
  const scrollCalculate = ({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 150) return true;
  };
  // console.log('state :>> ', state);
  console.log("moviesByCategoryeFetched :>> ", moviesByCategoryeFetched);
  // return [currentPage,steCurrentPage];
  return [steCurrentPage, moviesByCategoryeFetched];
};

export default useLoading;
