import { useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import {
  getMovieByGenre,
  getMovieByTitle,
  getTrendingMovies,
} from "../Components/services/API/api";
import { useData } from "../Components/services/Contexts/DataContext";
import useLoading from "./useLoading";

function currentPageOptions(searchQuery, categoryeId, path) {
  switch (path) {
    case "/searchMovie":
      return {
        currnentPage: "currentSearchMoviePage",
        apiRequest: getMovieByTitle,
        moviesCategory: "searchMovies",
        params: { searchQuery },
      };

    case "/categoryes":
      return {
        currnentPage: "currentCategoryePage",
        apiRequest: getMovieByGenre,
        moviesCategory: "moviesByCategorye",
        params: { genre: categoryeId },
      };

    default:
      return {
        currnentPage: "currentHomePage",
        apiRequest: getTrendingMovies,
        moviesCategory: "trendingMovies",
        params: {},
      };
  }
}

const useScrollPage = () => {
  const { search: searchQuery, categoryeId } = useLocation(), //get Id & searchQuery from url (slug)
    { path } = useRouteMatch();
    
  const [, setState] = useData();

  const {
    currnentPage,
    apiRequest,
    moviesCategory,
    params,
  } = currentPageOptions(searchQuery, categoryeId, path);

  const moviesByCategoryeFetched = useLoading(apiRequest, params); //Uploading data on scrollPage

  useEffect(() => {
    if (!moviesByCategoryeFetched.length) return;

    setState((prev) => {
      return {
        ...prev,
        [moviesCategory]: [
          ...prev[moviesCategory],
          ...moviesByCategoryeFetched,
        ],
        [currnentPage]: prev[currnentPage] + 1,
      };
    });
  }, [moviesByCategoryeFetched]);

};
export default useScrollPage;

// const moviesByCategoryeFetched = useLoading(
//     options.apiRequest,
//     options.params
//   ); //Uploading data on scrollPage
//   useEffect(() => {
//     if (!moviesByCategoryeFetched.length) return;
//     options.setMovie((prev) => [...prev, ...moviesByCategoryeFetched]);

//     setState((prev) => {
//       return {
//         ...prev,
//         [options.moviesCategory]: [
//           ...prev[options.moviesCategory],
//           ...moviesByCategoryeFetched,
//         ],
//         [options.currnentPage]: prev[options.currnentPage] + 1,
//       };
//     });
//   }, [moviesByCategoryeFetched]);

// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

// export default () => {
//   const [pageCount , setPageCount] = useState(1);
//   const [{ isLoading }, setState] = useData();

//   const doFetch = (page) => {
//     setState((prev) => ({ ...prev, isLoading: true }));
//     setPageCount(page);
//   };
//   useEffect(() => {
//     if (!isLoading) return;
//     try {
//       axios
//         .get(`/trending/all/week?api_key=${REQUEST_TOKEN}&page=${pageCount}`)
//         .then((response) => {
//           setState((prev) => ({
//             ...prev,
//             isLoading: false,
//             trendingMovies: [...prev.trendingMovies, ...response.data.results],
//           }));
//         });
//     } catch (error) {
//       setState((prev) => ({
//         ...prev,
//         isLoading: false,
//         error: error.response.data,
//       }));
//       throw new Error(error.response.data);
//     }
//   }, [isLoading,setState, pageCount]);

//   return doFetch;
// };
