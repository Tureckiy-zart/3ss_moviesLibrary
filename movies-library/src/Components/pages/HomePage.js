import React from "react";
import { useData } from "../services/Contexts/DataContext";
import Gallery from "../structure/Gallery";
import useScrollPage from "../../Hooks/useScrollPage";
import Banner from "../structure/Baner/Banner";

function HomePage() {
  const [{ trendingMovies }] = useData(null); //Global state
  useScrollPage();
  return (
    <>
      {/* <Banner /> */}
      {trendingMovies.length > 0 && <Gallery dataMovies={trendingMovies} />}
    </>
  );
}
export default HomePage;
