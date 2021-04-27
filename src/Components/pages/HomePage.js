import React from "react";
import { useData } from "../services/Contexts/DataContext";
import Gallery from "../structure/Gallery";
import useScrollPage from "../../Hooks/useScrollPage";
import Banner from "../structure/Baner/Banner";
import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "./Genres/GenreButtons";
import { ComponentWrapper } from "../structure/stylredComponents/stiledComponents";

function HomePage() {
  const [{ trendingMovies }] = useData(null); //Global state
  useScrollPage();
  return (
    <>
      <Banner />
        <>
          <ComponentWrapper position="relative" top="650px">
            <Carousel />
            <CategoryeButtons />
            <Gallery dataMovies={trendingMovies} />
          </ComponentWrapper>
        </>
    </>
  );
}
// )}
export default HomePage;
