import React, { memo, useEffect } from "react";
import { useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../../Hooks/useScrollPage";
import { getGenreData } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import Gallery from "../../structure/Gallery";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import MostPopular from "../MostPopular";
import CategoryeButtons from "./GenreButtons";

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
    <ComponentWrapper position="relative" top="125px">
        <CategoryeButtons />
      <>
        {moviesByCategorye.length > 0 ? (
          <Gallery dataMovies={moviesByCategorye} />
        ) : (
          <MostPopular />
        )}
      </>
    </ComponentWrapper>
  );
};

export default memo(MoviesByGenre);
