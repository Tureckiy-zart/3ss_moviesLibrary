// import { useCallback, useEffect, useState } from "react";
// import { getDataOnLoad } from "../Components/services/API/getData";
// import { useData } from "../Components/services/Contexts/DataContext";
// import { useLoader } from "../Components/services/Contexts/LoaderContext";
// import useCurrentPage from "./useCurrentPage";

// const useLoading = (apiRequest, options) => {
//   const [state, setIsLoading] = useLoader(false);
//   const [isFetching, setisFetching] = useState(false);
//   // const history = useHistory();
//   // console.log('history :>> ', history);

//   const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);
//   const currnetPage = useCurrentPage();
//   // const loadingOptins = useCallback(() => {
//   //   return {
//   //     apiRequest,
//   //     options,
//   //     isFetching,
//   //     setIsLoading,
//   //     currnetPage,
//   //     setMoviesByCategoryeFetched,
//   //     setisFetching,
//   //     // history,
//   //   };
//   // }, [
//   //   // apiRequest,
//   //   // options,
//   //   // isFetching,
//   //   // setIsLoading,
//   //   // currnetPage,
//   //   // setMoviesByCategoryeFetched,
//   //   // setisFetching,
//   // ]);
//   // const loadingOptins = {
//   //   apiRequest,
//   //   options,
//   //   isFetching,
//   //   setIsLoading,
//   //   currnetPage: useCurrentPage(),
//   //   setMoviesByCategoryeFetched,
//   //   setisFetching,
//   //   // history,
//   // };
//   useEffect(
//     () =>
//       getDataOnLoad({
//         apiRequest,
//         options,
//         isFetching,
//         currnetPage,
//         setMoviesByCategoryeFetched,
//         setisFetching,
//       }),
//     [isFetching, setIsLoading]
//     // [isFetching, setIsLoading, apiRequest, options, currnetPage]
//   ); //if put here currnetPage page incraasing 2 times each time
//   // useEffect(() => getDataOnLoad(loadingOptins()), [isFetching, loadingOptins]); //if put here currnetPage page incraasing 2 times each time

//   const scrollCalculate = useCallback(({ target }) => {
//     //calculate distance from bottom of screen
//     const distanceFromBottom =
//       target.documentElement.scrollHeight -
//       (target.documentElement.scrollTop + window.innerHeight);

//     if (distanceFromBottom < 100)  setisFetching(true); // allow to make api raquest
//     return;
//   }, []);

//   useEffect(() => {
//     //scroll listener
//     document.addEventListener("scroll", scrollCalculate);
//     return function () {
//       document.removeEventListener("scroll", scrollCalculate);
//     };
//   }, [scrollCalculate]);
//   // console.log('currnetPage :>> ', currnetPage);
//   return moviesByCategoryeFetched;
// };

// export default useLoading;











// // import { useCallback, useEffect, useState } from "react";
// // import { getDataOnLoad } from "../Components/services/API/getData";
// // import { useData } from "../Components/services/Contexts/DataContext";
// // import { useLoader } from "../Components/services/Contexts/LoaderContext";
// // import useCurrentPage from "./useCurrentPage";

// // const useLoading = (apiRequest, options) => {
// //   const [, setIsLoading] = useLoader(false);

// //   const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);
// //   const currnetPage = useCurrentPage();
// //   // console.log("object :>> ", currnetPage);
// //   const [isFetching, setisFetching] = useScrollListener();
// //   useEffect(
// //     () =>
// //       getDataOnLoad({
// //         apiRequest,
// //         setisFetching,
// //         options,
// //         isFetching,
// //         currnetPage,
// //         setMoviesByCategoryeFetched,
// //         setIsLoading,
// //       }),

// //     // getData,
// //     [isFetching]
// //     // [isFetching, setIsLoading, apiRequest, options, currnetPage]
// //   ); //if put here currnetPage page incraasing 2 times each time
// //   // useEffect(() => getDataOnLoad(loadingOptins()), [isFetching, loadingOptins]); //if put here currnetPage page incraasing 2 times each time

// //   // console.log('currnetPage :>> ', currnetPage);
// //   return moviesByCategoryeFetched;
// // };

// // export default useLoading;

// export const useScrollListener = () => {
//   const [isFetching, setisFetching] = useState(false);
//   const [, setState] = useData(null);
//   const [, setIsLoading] = useLoader(false);
//   const scrollCalculate = ({ target }) => {
//     //calculate distance from bottom of screen
//     const distanceFromBottom =
//       target.documentElement.scrollHeight -
//       (target.documentElement.scrollTop + window.innerHeight);

//     if (distanceFromBottom > 100) {
//       setisFetching(false);
//       // window.scrollBy(100, 150);
//       // Ss(false);
//     }
//     if (distanceFromBottom < 100) {
//       window.scrollBy(1000, -1000);
//       console.log("22 :>> ", 22);
//       // setState((prev) => ({
//       //   ...prev,
//       //   currentHomePage: prev.currentHomePage + 1,
//       // }));
//       setisFetching(true);
//       // return setTimeout(() => {
//       // }, 900); // allow to make api raquest
//       // Ss(true);
//     }
//     // return setTimeout(
//     //   () =>
//     //     setState((prev) => ({
//     //       ...prev,
//     //       currentHomePage: prev.currentHomePage + 1,
//     //     })),
//     //   900
//     // ); // allow to make api raquest
//     // return setTimeout(() => setisFetching(true), 900); // allow to make api raquest
//   };

//   useEffect(() => {
//     //scroll listener
//     document.addEventListener("scroll", scrollCalculate);
//     return function () {
//       document.removeEventListener("scroll", scrollCalculate);
//     };
//   }, [scrollCalculate]);
//   // return s;
//   return [isFetching, setisFetching];
// };






import { useCallback, useEffect, useState } from "react";
import { getDataOnLoad } from "../Components/services/API/getData";
import { useLoader } from "../Components/services/Contexts/LoaderContext";
import useCurrentPage from "./useCurrentPage";

const useLoading = (apiRequest, options) => {
  const [, setIsLoading] = useLoader(false);
  const [isFetching, setisFetching] = useState(false);

  const [moviesByCategoryeFetched, setMoviesByCategoryeFetched] = useState([]);
  const currnetPage = useCurrentPage();


  useEffect(
    () =>
      getDataOnLoad({
        apiRequest,
        options,
        isFetching,
        currnetPage,
        setMoviesByCategoryeFetched,
        setisFetching,
      }),
    [isFetching, setIsLoading, apiRequest]
    // [isFetching, setIsLoading, apiRequest, options, currnetPage]
  ); //if put here currnetPage page incraasing 2 times each time

  const scrollCalculate = useCallback(({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 100) setisFetching(true); // allow to make api raquest
    return;
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