import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../Components/services/Contexts/DataContext";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

export default () => {
  const [pageCount , setPageCount] = useState(1);
  const [{ isLoading }, setState] = useData();

  const doFetch = (page) => {
    setState((prev) => ({ ...prev, isLoading: true }));
    setPageCount(page);
  };
  useEffect(() => {
    if (!isLoading) return;
    try {
      axios
        .get(`/trending/all/week?api_key=${REQUEST_TOKEN}&page=${pageCount}`)
        .then((response) => {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            trendingMovies: [...prev.trendingMovies, ...response.data.results],
          }));
        });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.response.data,
      }));
      throw new Error(error.response.data);
    }
  }, [isLoading,setState, pageCount]);

  return doFetch;
};
