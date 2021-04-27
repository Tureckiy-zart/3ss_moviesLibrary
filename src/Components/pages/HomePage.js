import React, { useEffect } from "react";
import { useData } from "../services/Contexts/DataContext";
import Gallery from "../structure/Gallery";
import useScrollPage from "../../Hooks/useScrollPage";
import Banner from "../structure/Baner/Banner";
import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "./Genres/GenreButtons";
import { ComponentWrapper } from "../structure/stylredComponents/stiledComponents";
import { useLoader } from "../services/Contexts/LoaderContext";
import { getTrendingData } from "../services/API/getData";

function HomePage() {
  const [{ trendingMovies }, setState] = useData(null);
  const [, setIsLoading] = useLoader();
  useEffect(() => getTrendingData(trendingMovies, setState, setIsLoading), [
    trendingMovies,
    setState,
    setIsLoading,
  ]);

  useScrollPage();

  return (
    <>
      {trendingMovies && (
        <>
          <Banner />
          <ComponentWrapper position="relative" top="650px">
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
export default HomePage;
