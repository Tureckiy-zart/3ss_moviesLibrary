import React, { memo, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useLoading from "../../../Hooks/useLoading";
import { getMovieByGenre } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import Gallery from "../../structure/Gallery";

const getAsyncData = async (categoryeId, setState, setIsLoading, path) => {
  if (!categoryeId) return;
  const response = await getMovieByGenre({
    genre: Number(categoryeId),
  });

  setState((prev) => ({
    ...prev,
    moviesByCategorye: response,
    currentCategoryePage: 2,
    currentSection: `${path}`,
  }));
  setIsLoading(false); //spiner off
};

const MoviesByCategoryes = () => {
  const [, setIsLoading] = useLoader(),
    { categoryeId } = useLocation(null), //get Id from url (slug)
    { path } = useRouteMatch();
  const [{ moviesByCategorye }, setState] = useData({});

  const moviesByCategoryeFetched = useLoading(getMovieByGenre, {
    genre: categoryeId,
  }); //Uploading data on scroll (hook)

  useEffect(() => getAsyncData(categoryeId, setState, setIsLoading, path), [
    categoryeId,
    path,
    setState,
    setIsLoading,
  ]);

  useEffect(() => {
    //if get new data, set it to state and currentPage +1
    if (!moviesByCategoryeFetched.length) return;
    setState((prev) => ({
      ...prev,
      moviesByCategorye: [
        //if get new data, set it to state and currentPage +1
        ...prev.moviesByCategorye,
        ...moviesByCategoryeFetched,
      ],
      currentCategoryePage: prev.currentCategoryePage + 1, //currentPage +1
    }));
  }, [moviesByCategoryeFetched, setState]);

  return (
    <>
      {moviesByCategorye.length > 0 && (
        <Gallery dataMovies={moviesByCategorye} />
      )}
    </>
  );
};
// )}

export default memo(MoviesByCategoryes);

// useEffect(() => {
//   if (!categoryeId) return;
//   setIsLoading(true); //spiner on

//   getMovieByGenre({ genre: Number(categoryeId) })
//     .then((response) => {
//       setState((prev) => ({
//         ...prev,
//         moviesByCategorye: response,
//         currentSection: `${path}`,
//         currentCategoryePage: 2,
//       }));
//       setIsLoading(false); //spiner off
//     })
//     .catch((error) => {
//       setState((prev) => ({
//         ...prev,
//         error: error.response.data,
//       }));
//       setIsLoading(false);
//       throw new Error(error.response.data);
//     });
// }, []);
