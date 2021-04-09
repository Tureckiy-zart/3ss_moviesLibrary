// import { useCallback, useEffect, useState } from "react";
// import { useData } from "../Components/services/Contexts/DataContext";

// const useLoading = (apiRequest, options) => {
//   const [
//     { currentSection, currentCategoryePage, currentHomePage },
//     setState,
//   ] = useData(); //global state
//   const [state, ,] = useData(); //global state
//   const [isFetching, setisFetching] = useState(false);
//   const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);

//   const getCurrnetPage = () => {
//     if (currentSection === "/categoryes")
//       return { categorye: "moviesByCategorye", currentCategoryePage };
//     return { categorye: "trendingMovies", currentHomePage };
//   };
//   const currnetPage = getCurrnetPage();

//   useEffect(() => {
//     if (!isFetching) return;
//     setState((prev) => ({ ...prev, isLoading: true }));
//     console.log("currnetPage :>> ", currnetPage);

//     apiRequest({ ...options, page: currnetPage.currentCategoryePage })
//       .then((response) => {
//         //write to the state of the loaded data
//         if (currentSection === "/categoryes") {
//           setState((prev) => ({
//             ...prev,
//             isLoading: false,
//             [`${currnetPage.categorye}`]: [
//               ...prev[`${currnetPage.categorye}`],
//               ...response,
//             ],
//             // [`${currnetPage.currentHomePage}`]: prev.currentHomePage + 1,
//             // currentCategoryePage: prev.currentCategoryePage + 1,
//           }));
//         } else {
//           setState((prev) => ({
//             ...prev,
//             isLoading: false,
//             [`${currnetPage.categorye}`]: [
//               ...prev[`${currnetPage.categorye}`],
//               ...response,
//             ],
//             // [`${currnetPage.currentHomePage}`]: prev.currentHomePage + 1,
//             // currentHomePage: prev.currentHomePage + 1,
//           }));
//         }
//         // setState((prev) => ({
//         //   ...prev,
//         //   isLoading: false,
//         //   [`${currnetPage.categorye}`]: [...prev[`${currnetPage.categorye}`], ...response],
//         //   // [`${currnetPage.currentHomePage}`]: prev.currentHomePage + 1,
//         //   currentHomePage: prev.currentHomePage + 1,
//         // }));
//         // setMoviesByCategoryeFetched(response);
//         // console.log("statewwwww :>> ", state);
//       })
//       .catch((error) => {
//         setState((prev) => ({
//           ...prev,
//           isLoading: false,
//           error: error.response.data,
//         }));
//         throw new Error(error.response.data);
//       })
//       .finally(() => {
//         setisFetching(false);
//       });
//   }, [isFetching, apiRequest, currnetPage.currentCategoryePage, setState]);
//   useEffect(() => {
//     setState((prev) => ({
//       ...prev,

//       // [`${currnetPage.currentHomePage}`]: prev.currentHomePage + 1,
//       currentHomePage: prev.currentHomePage + 1,
//     }));
//   }, []);
//   // console.log("state :>> ", state);
//   const scrollCalculate = useCallback(({ target }) => {
//     //calculate distance from bottom of screen
//     const distanceFromBottom =
//       target.documentElement.scrollHeight -
//       (target.documentElement.scrollTop + window.innerHeight);

//     // if (distanceFromBottom < 150) return true;
//     if (distanceFromBottom < 150) setisFetching(true);
//   }, []);

//   useEffect(() => {
//     //scroll listener
//     console.log("98 :>> ", 98);
//     document.addEventListener("scroll", scrollCalculate);
//     return function () {
//       document.removeEventListener("scroll", scrollCalculate);
//     };
//   }, [scrollCalculate]);

//   return moviesByCategoryeFetched;
// };

// export default useLoading;

import { useCallback, useEffect, useState } from "react";
import { useData } from "../Components/services/Contexts/DataContext";

const useLoading = (apiRequest, options) => {
  const [
    { currentSection, currentCategoryePage, currentHomePage },
    setState,
  ] = useData(); //global state
  const [isFetching, setisFetching] = useState(false);
  const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);

  const getCurrnetPage = () => {
    if (currentSection === "/categoryes") return currentCategoryePage;
    return currentHomePage;
  };
  const currnetPage = getCurrnetPage();

  useEffect(() => {
    if (!isFetching) return;
    setState((prev) => ({ ...prev, isLoading: true }));

    apiRequest({ ...options, page: currnetPage })
      .then((response) => {
        //write to the state of the loaded data
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
        setMoviesByCategoryeFetched(response);
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
  }, [isFetching, apiRequest, currnetPage, setState]);

  const scrollCalculate = useCallback(({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    // if (distanceFromBottom < 150) return true;
    if (distanceFromBottom < 150) setisFetching(true);
  }, []);

  useEffect(() => {
    //scroll listener
    document.addEventListener("scroll", scrollCalculate);
    return function () {
      document.removeEventListener("scroll", scrollCalculate);
    };
  }, [scrollCalculate]);

  return moviesByCategoryeFetched;
};

export default useLoading;
