import { useCallback, useEffect, useState } from "react";
import { useData } from "../Components/services/Contexts/DataContext";
import { useLoader } from "../Components/services/Contexts/LoaderContext";

const useLoading = (apiRequest, options) => {
  const [
    {
      currentSection,
      currentCategoryePage,
      currentSearchMoviePage,
      currentHomePage,
    },
    setState,
  ] = useData(); //global state
  const [, setIsLoading] = useLoader();

  const [isFetching, setisFetching] = useState(false);
  const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);

  const getCurrnetPage = () => {  //get currentPage by category
    if (currentSection === "/categoryes") return currentCategoryePage;
    if (currentSection === "/searchMovie") return currentSearchMoviePage;
    return currentHomePage;

    // switch (currentSection) {
    //   case "/categoryes":
    //     return currentCategoryePage;
    //     // break;
    //   case "/searchMovie":
    //     return currentSearchMoviePage;
    //     // break;
    //   // case "/categoryes":
    //   //   return currentCategoryePage
    //   //   break;

    //   default:
    //   return  currentHomePage;
    //     // break;
    // }
  };
  const currnetPage = getCurrnetPage(); //currentPage 

  useEffect(() => {
    if (!isFetching) return;
    setIsLoading(true); //Spiner on
    // console.log("currnetPage :>> ", currnetPage);

    apiRequest({ ...options, page: currnetPage })
      .then((response) => {
        //write to the state of the loaded data
        setMoviesByCategoryeFetched(response);
        setIsLoading(false); //Spiner off
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error: error.response.data })); // if error - set ERROR massage to state
        setIsLoading(false); //Spiner off
        throw new Error(error.response.data);
      })
      .finally(
        () => setisFetching(false) // dismiss allow api raquest
      );
  }, [isFetching, apiRequest, currnetPage, setState]);

  const scrollCalculate = useCallback(({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 150) setisFetching(true); // allow to make api raquest
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
//
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
