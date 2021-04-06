import { useEffect, useState } from "react";
import { useData } from "../Components/services/Contexts/DataContext";

const useLoading = (apiRequest) => {
  const [, setState] = useData(); //global state
  const [currentPage, steCurrentPage] = useState(1);
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    if (!isFetching) return;

    setState((prev) => ({ ...prev, isLoading: true }));

    apiRequest(currentPage)
      .then((response) => {
          //write to the state of the loaded data
        setState((prev) => ({
          ...prev,
          isLoading: false,
          dataMovies: [...prev.dataMovies, ...response],
        }));
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
        steCurrentPage((prev) => prev + 1); //page enlargement
      });
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
  };
  const scrollCalculate = ({ target }) => {
      //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 200) return true;
  };
  return steCurrentPage
};

export default useLoading;
