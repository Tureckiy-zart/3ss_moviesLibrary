import { errorPageRedirect, defaultFunc } from "../../heplers/heplers";
import {
  getCollection,
  getCollectionId,
  getMovieByGenre,
  getMovieByID,
  getMovieByTitle,
  getMovieCast,
  getMovieReview,
  getTrendingMovies,
} from "./api";

const errorHandler = (error = null, setState = defaultFunc) => {
  console.warn("error.response.data :>> ", error.response.data);
  setState((prev) => ({ ...prev, error }));
  errorPageRedirect();
  throw new Error(error);
};

export const getTrendingData = async (
  trendingMovies = [],
  setState = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (trendingMovies.length > 0) return;
  setIsLoading(true);
  try {
    const response = await getTrendingMovies({ page: 1 });
    setState((prev) => ({
      ...prev,
      trendingMovies: response,
      currentHomePage: 2,
    }));
  } catch (error) {
    errorHandler(error, setState);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getMovieDataByID = async (
  id = null,
  setMovieDetails = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (!id) return;
  setIsLoading(true);
  try {
    const IdParsed = parseInt(id);
    const response = await getMovieByID(IdParsed);
    setMovieDetails(response);
  } catch (error) {
    errorHandler(error);
  } finally {
    setIsLoading(false); //spiner off
  }
};
export const getCollectionsData = async (
  searchQuery = "",
  setIsLoading = defaultFunc,
  setCollectons = defaultFunc,
  setState = defaultFunc
) => {
  if (!searchQuery) return;
  setIsLoading(true); //spiner on
  try {
    const response = await getCollectionId({ searchQuery }); //get collections {id, name}
    setCollectons(response); //set local stse collections {id, name}
  } catch (error) {
    errorHandler(error, setState);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getCurrnetCollection = async (
  id = null,
  setCollecton = defaultFunc,
  setState = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (!id) return;
  setIsLoading(true);
  try {
    const IdParsed = parseInt(id);
    const response = await getCollection(IdParsed);
    setCollecton(response);
    setState((prev) => ({
      ...prev,
      currentCollectonPage: 2,
    }));
  } catch (error) {
    errorHandler(error, setState);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getGenreData = async (
  categoryeId = null,
  setState = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (!categoryeId) return;

  try {
    const response = await getMovieByGenre({
      genre: Number(categoryeId),
    });
    setState((prev) => ({
      ...prev,
      moviesByCategorye: response,
      currentCategoryePage: 2,
    }));
  } catch (error) {
    errorHandler(error, setState);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getSearchData = async (
  searchQuery = "",
  setState = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (!searchQuery) return;
  setIsLoading(true);
  try {
    const response = await getMovieByTitle({ searchQuery });
    setState((prev) => ({
      ...prev,
      searchMovies: response,
      currentSearchMoviePage: 2,
    }));
  } catch (error) {
    errorHandler(error, setState);
  } finally {
    setIsLoading(false); //spiner off
  }
};
export const getCastData = async (
  id = null,
  setCast = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (!id) return;
  setIsLoading(true); //spiner on
  try {
    const response = await getMovieCast(id);
    setCast(response);
  } catch (error) {
    errorHandler(error);
  } finally {
    setIsLoading(false); //spiner off
  }
};
export const getReviewsData = async (
  id = null,
  setReviews = defaultFunc,
  setIsLoading = defaultFunc
) => {
  if (!id) return;
  setIsLoading(true); //spiner on
  try {
    const response = await getMovieReview(id);
    setReviews(response);
  } catch (error) {
    errorHandler(error);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getDataOnLoad = async ({
  apiRequest = defaultFunc,
  options = {},
  isFetching = false,
  setIsLoading = defaultFunc,
  currnetPage = 1,
  setMoviesByCategoryeFetched = defaultFunc,
  setisFetching = defaultFunc,
}) => {
  if (!isFetching) return;
  setIsLoading(true); //Spiner on
  try {
    const response = await apiRequest({ ...options, page: currnetPage });
    setMoviesByCategoryeFetched(response);
  } catch (error) {
    errorPageRedirect(error);
  } finally {
    setIsLoading(false); //spiner off
    setisFetching(false);
  }
};
