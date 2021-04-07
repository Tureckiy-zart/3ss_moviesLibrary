import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { getTrendingMovies } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import useLoading from "../../../Hooks/useLoading";
import List from "../../structure/List/List";
import Carousel from "../../Carousel/Carousel";
import Categoryes from "../Categoryes/Categoryes";
function HomePage() {
  const [{ trendingMovies = [], error, canShowTrending }, setState] = useData(
    null
  ); //Global state
  const [moviesByCategorye, setMoviesByCategorye] = useState([]);

  const [steCurrentPage, moviesByCategoryeFetched] = useCallback(useLoading(getTrendingMovies)); //Uploading data on scroll
  useEffect(() => {
    //write to the state of the loaded data after first render
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      getTrendingMovies({ page: 1 }).then((response) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          trendingMovies: response,
          canShowTrending: true,
        }));
        setMoviesByCategorye(response)
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.response.data,
      }));
      throw new Error(error.response.data);
    } finally {
      steCurrentPage((prev) => prev + 1); //page enlargement
    }
  }, []);
  useEffect(() => {
    if (moviesByCategoryeFetched.length) {
      setMoviesByCategorye((prev) => [...prev, ...moviesByCategoryeFetched]);
    }
  }, [moviesByCategoryeFetched]);

  return (
    <>
      {moviesByCategorye.length && (
        <section>
          <div>
            <p>Home page</p>
            <Carousel />
            <Categoryes />
            {canShowTrending && <List dataMovies={moviesByCategorye} />}
          </div>

          {error && <p>${error.status_message}</p>}
        </section>
      )}
    </>
  );
}
export default HomePage;
