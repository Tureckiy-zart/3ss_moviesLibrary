import React from "react";
import { useData } from "../services/Contexts/DataContext";
import Gallery from "../structure/Gallery";
import useScrollPage from "../../Hooks/useScrollPage";

function HomePage() {
  const [{ trendingMovies }] = useData(null); //Global state
  useScrollPage();
  return (
    <>{trendingMovies.length > 0 && <Gallery dataMovies={trendingMovies} />}</>
  );
}
export default HomePage;
// const moviesByCategoryeFetched = useLoading(getTrendingMovies); //Uploading data on scroll
// useEffect(() => {
//   //updating  currentPage
//   setState((prev) => ({
//     ...prev,
//     trendingMovies: [...prev.trendingMovies, ...moviesByCategoryeFetched],
//     currentHomePage: prev.currentHomePage + 1,
//   }));
// }, [moviesByCategoryeFetched]);
