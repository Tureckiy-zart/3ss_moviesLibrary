import { errorPageRedirect, defaultFunc } from "../../heplers/heplers";
import { doFetch } from "./api";

export const errorHandler = (
  error = null,
  setState = defaultFunc,
  history = {}
) => {
  console.warn("error :>> ", error);
  setState((prev) => ({ ...prev, error }));
  history.push("/errorPage");
};

export const getDataOnLoad = async ({
  apiRequest = "",
  options = {}, // id, searchQuery, sortBy, 
  currnetPage = 1,
  isFetching = false,
  setIsLoading = defaultFunc,
  setMoviesByCategoryeFetched = defaultFunc,
  setisFetching = defaultFunc,
}) => {
  if (!isFetching) return;
  setIsLoading(true); //Spiner on
  try {
    const {results} = await doFetch(apiRequest, {
      ...options,
      page: currnetPage,
    });
    setMoviesByCategoryeFetched(results);
  } catch (error) {
    errorPageRedirect(error);
  } finally {
    setIsLoading(false); //spiner off
    setisFetching(false);
  }
};
