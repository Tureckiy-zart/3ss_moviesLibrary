// import { defaultFunc } from "../../heplers/heplers";
// import { doFetch } from "./api";

export const ErrorHandler = (error = null, history = {}) => {
  console.warn("error :>> ", error);
  history.push({
    pathname: "/errorPage",
    // state: { from: history.location },
  });
};

// export const getDataOnLoad = async ({
//   apiRequest = "",
//   options = {}, // id, searchQuery, sortBy,
//   currnetPage = 1,
//   isFetching = false,
//   setIsLoading = defaultFunc,
//   setMoviesByCategoryeFetched = defaultFunc,
//   setisFetching = defaultFunc,
// }) => {
//   if (!isFetching) return;

//   setIsLoading(true); //Spiner on

//   try {
//     const { results } = await doFetch(apiRequest, {
//       ...options,
//       page: currnetPage,
//     });

//     setMoviesByCategoryeFetched(results);
//     setIsLoading(false); //spiner off
//     setisFetching(false);
//   } catch (error) {
//     ErrorHandler(error);
//   } finally {
//     setIsLoading(false); //spiner off
//     setisFetching(false);
//   }
// };
