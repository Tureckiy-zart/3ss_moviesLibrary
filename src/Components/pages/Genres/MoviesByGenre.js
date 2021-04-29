import React, { useEffect } from "react";
import { useLocation } from "react-router";
import useScrollPage from "../../../Hooks/useScrollPage";
import { doFetch } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import withData from "../../services/hoc/withFetch";
import Gallery from "../../structure/Gallery";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import MostPopular from "../MostPopular";
import CategoryeButtons from "./GenreButtons";

const MoviesByGenre = ({ setIsLoading, ErrorHandler, history }) => {
  const { categoryeId } = useLocation(null); //get Id from url (slug)

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
        ErrorHandler(error,  history);
      })
      .finally(setIsLoading(false));
  }, [categoryeId, setState, setIsLoading, history, ErrorHandler]);

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

export default withData(MoviesByGenre);
