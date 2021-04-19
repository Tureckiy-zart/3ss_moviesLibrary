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

export const getTrendingData = async (
  trendingMovies,
  setState,
  setIsLoading
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
    console.warn("error.response.data :>> ", error.response.data);
    throw new Error(error);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getMovieDataByID = async (id, setMovieDetails, setIsLoading) => {
  if (!id) return;
  setIsLoading(true);
  const IdParsed = parseInt(id);

  const response = await getMovieByID(IdParsed);

  setMovieDetails(response);

  setIsLoading(false);
};
export const getCollectionsData = async (
  searchQuery,
  setIsLoading,
  setCollectons,
  setState
) => {
  if (!searchQuery) return;
  setIsLoading(true); //spiner on
  try {
    const response = await getCollectionId({ searchQuery }); //get collections {id, name}
    setCollectons(response); //set local stse collections {id, name}
  } catch (error) {
    console.log("error :>> ", error);
    setState((prev) => ({ ...prev, error }));
    window.location = "/errorPage";
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getCurrnetCollection = async (
  id,
  setCollecton,
  setState,
  setIsLoading
) => {
  if (!id) return;
  setIsLoading(true);
  const IdParsed = parseInt(id);

  const response = await getCollection(IdParsed);

  setCollecton(response);
  setState((prev) => ({
    ...prev,
    currentCollectonPage: 2,
  }));
  setIsLoading(false);
};

export const getGenreData = async (categoryeId, setState, setIsLoading) => {
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
    console.warn("error.response.data :>> ", error.response.data);
    throw new Error(error);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getSearchData = async (searchQuery, setState, setIsLoading) => {
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
    console.log("error :>> ", error);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getCastData = async (id, setCast, setIsLoading) => {
  if (!id) return;
  setIsLoading(true); //spiner on
  try {
    const response = await getMovieCast(id);
    setCast(response);
  } catch (error) {
    console.log("error :>> ", error);
  } finally {
    setIsLoading(false); //spiner off
  }
};
export const getReviewsData = async (id, setReviews, setIsLoading) => {
  if (!id) return;
  setIsLoading(true); //spiner on
  try {
    const response = await getMovieReview(id);
    setReviews(response);
  } catch (error) {
    console.log("error :>> ", error);
  } finally {
    setIsLoading(false); //spiner off
  }
};

export const getDataOnLoad = async ({
  apiRequest,
  options,
  isFetching,
  setIsLoading,
  currnetPage,
  setMoviesByCategoryeFetched,
  setisFetching,
}) => {
  if (!isFetching) return;
  setIsLoading(true); //Spiner on
  try {
    const response = await apiRequest({ ...options, page: currnetPage });
    console.log("response :>> ", response);
    setMoviesByCategoryeFetched(response);
  } catch (error) {
    console.log("error :>> ", error);
  } finally {
    setIsLoading(false); //spiner off
    setisFetching(false);
  }
};
