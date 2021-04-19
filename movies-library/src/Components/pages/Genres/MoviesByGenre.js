import React, { memo, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../../Hooks/useScrollPage";
import { getGenreData } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import Gallery from "../../structure/Gallery";
import MostPopular from "../MostPopular";

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
      {moviesByCategorye.length > 0 ? (
        <Gallery dataMovies={moviesByCategorye} />
      ) : (
        <MostPopular />
      )}
    </>
  );
};

export default memo(MoviesByGenre);
