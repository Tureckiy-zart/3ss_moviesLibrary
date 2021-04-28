import React, { memo, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import useScrollPage from "../../../Hooks/useScrollPage";
import { doFetch } from "../../services/API/api";
import { errorHandler } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import Gallery from "../../structure/Gallery";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import MostPopular from "../MostPopular";
import CategoryeButtons from "./GenreButtons";

const MoviesByGenre = () => {
  const history = useHistory();

  const [, setIsLoading] = useLoader(),
    { categoryeId } = useLocation(null), //get Id from url (slug)
    { path } = useRouteMatch();
  const [{ moviesByCategorye }, setState] = useData({});

  useEffect(() => {
    if (!categoryeId) return;
    setIsLoading(true);
    doFetch("getMovieByGenre", { genre: categoryeId })
      .then(({ results }) => {
        setState((prev) => ({
          ...prev,
          moviesByCategorye: results,
          currentCategoryePage: 2,
        }));
      })
      .catch((error) => {
        errorHandler(error, setState, history);
      })
      .finally(setIsLoading(false));
  }, [categoryeId, path, setState, setIsLoading, history]);

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
