import React, { memo, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../../Hooks/useScrollPage";
import { getGenreData } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import Gallery from "../../structure/Gallery";

const MoviesByGenre = () => {
  const [, setIsLoading] = useLoader(),
    { categoryeId } = useLocation(null), //get Id from url (slug)
    { path } = useRouteMatch();
  const [{ moviesByCategorye }, setState] = useData({});
  
  useEffect(() => getGenreData(categoryeId, setState, setIsLoading, path), [
    categoryeId,
    path,
    setState,
    setIsLoading,
  ]);

  useScrollPage();

  return (
    <>
      {moviesByCategorye.length > 0 && (
        <Gallery dataMovies={moviesByCategorye} />
      )}
    </>
  );
};
// )}

export default memo(MoviesByGenre);

// const moviesByCategoryeFetched = useLoading(getMovieByGenre, {
//   genre: categoryeId,
// }); //Uploading data on scroll (hook)

// useEffect(() => {
//   //if get new data, set it to state and currentPage +1
//   if (!moviesByCategoryeFetched.length) return;
//   setState((prev) => ({
//     ...prev,
//     moviesByCategorye: [
//       //if get new data, set it to state and currentPage +1
//       ...prev.moviesByCategorye,
//       ...moviesByCategoryeFetched,
//     ],
//     currentCategoryePage: prev.currentCategoryePage + 1, //currentPage +1
//   }));
// }, [moviesByCategoryeFetched, setState]);
