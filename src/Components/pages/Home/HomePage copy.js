import React, { useEffect } from "react";
import { useData } from "../../services/Contexts/DataContext";
import Gallery from "../../structure/Gallery";
import Banner from "../../structure/Baner/Banner";
import Carousel from "../../Carousel/Carousel";
import CategoryeButtons from "../Genres/GenreButtons";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { useLoader } from "../../services/Contexts/LoaderContext";

import useScrollPage from "../../../Hooks/useScrollPage";

function HomePage2({ setState, errorHandler, history }) {
  const [{ trendingMovies }] = useData(null);
  const [, setIsLoading] = useLoader();

  useEffect(() => {
    if (trendingMovies.length > 0) return;
    setIsLoading(true); //spiner on
    doFetch("getTrendingMovies")
      .then(({ results }) => {
        setState((prev) => ({
          ...prev,
          trendingMovies: results,
        }));
        setIsLoading(false);
      })
      .catch((error) => {
        errorHandler(error, setState, history);
      });
    // .finally(setIsLoading(false));
  }, [setIsLoading, setState, errorHandler, history, trendingMovies.length]);

  useScrollPage();

  return (
    <>
      {trendingMovies && (
        <>
          <Banner />
          <ComponentWrapper position="relative" top="650px">
            {/* <DataProvider>
              <ScrollPage />
            </DataProvider> */}
            <Carousel />
            <CategoryeButtons />
            <Gallery dataMovies={trendingMovies} />
          </ComponentWrapper>
        </>
      )}
    </>
  );
}
// )}
export default withData(HomePage2);
