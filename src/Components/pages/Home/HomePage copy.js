import React from "react";
import { useData } from "../../services/Contexts/DataContext";
import Gallery from "../../structure/Gallery";
import Banner from "../../structure/Baner/Banner";
import Carousel from "../../Carousel/Carousel";
import CategoryeButtons from "../Genres/GenreButtons";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import useScrollPage from "../../../Hooks/useScrollPage";

function HomePage2() {
  const [{ trendingMovies }] = useData(null);

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
export default HomePage2;
