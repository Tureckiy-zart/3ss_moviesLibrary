import React, { useEffect } from "react";
import { getTrendingMovies } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import useLoading from "../../Hooks/useLoading";
import { useRouteMatch } from "react-router";
import Gallery from "../structure/Gallery";
import { useLoader } from "../services/Contexts/LoaderContext";

function HomePage() {
  const [{ trendingMovies, error }, setState] = useData(null); //Global state
  // const [state] = useData(null); //Global state
  const moviesByCategoryeFetched = useLoading(getTrendingMovies); //Uploading data on scroll
  const { path } = useRouteMatch();
  const [, setIsLoading] = useLoader();

  useEffect(() => {
    //write to the state of the loaded data after first render
    if (trendingMovies.length > 0) return;

    setIsLoading(true);
    getTrendingMovies({ page: 1 }) //api request
      .then((response) => {
        setState((prev) => ({
          ...prev,
          trendingMovies: response,
          currentHomePage: 2,
          currentSection: `${path}`,
        }));
        setIsLoading(false); //spiner off
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          error: error.response.data,
        }));
        setIsLoading(false);
        throw new Error(error.response.data);
      });
  }, []);

  useEffect(() => {
    //updating  currentPage

    if (!moviesByCategoryeFetched.length) return;
    setState((prev) => ({
      ...prev,
      trendingMovies: [...prev.trendingMovies, ...moviesByCategoryeFetched],
      currentHomePage: prev.currentHomePage + 1,
    }));
  }, [moviesByCategoryeFetched]);
  return <>{trendingMovies && <Gallery dataMovies={trendingMovies} />}</>;
}
export default HomePage;
