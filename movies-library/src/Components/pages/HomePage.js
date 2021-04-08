import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import useLoading from "../../Hooks/useLoading";
import List from "../structure/List/List";
import Carousel from "../Carousel/Carousel";
import Categoryes from "./Categoryes";
function HomePage() {
  const [{ trendingMovies = [], error, canShowTrending }, setState] = useData(
    null
  ); //Global state
  const [state] = useData(); //Global state
  console.log("state :>> ", state);
  // const [moviesByCategorye, setMoviesByCategorye] = useState([]);
  const moviesByCategoryeFetched = useLoading(getTrendingMovies); //Uploading data on scroll
  
  useEffect(() => {
    if (trendingMovies.length > 0) return;
    console.log("73 :>> ", 73);
    //write to the state of the loaded data after first render
    setState((prev) => ({ ...prev, isLoading: true }));

    getTrendingMovies({ page: 1 })
      .then((response) => {
        // setMoviesByCategorye(response);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          trendingMovies: response,
          currentPage: prev.currentPage + 1,
        }));
        // setCurrentPage((prev) => prev + 1); //page enlargement
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.response.data,
        }));
        throw new Error(error.response.data);
      });
  }, []);
  // useEffect(() => {
  //   if (moviesByCategoryeFetched.length && canShowTrending)
  //   // setMoviesByCategorye((prev) => [...prev, ...moviesByCategoryeFetched]);
  // }, [moviesByCategoryeFetched]);
  useEffect(() => {
    if (moviesByCategoryeFetched.length && canShowTrending) {
      setState((prev) => ({
        ...prev,
        trendingMovies: [...prev.trendingMovies, ...moviesByCategoryeFetched],
      }));

      // setMoviesByCategorye((prev) => [...prev, ...moviesByCategoryeFetched]);
    }
  }, [moviesByCategoryeFetched]);

  // useEffect(() => {
  //   if (canShowTrending === false) {
  //     setMoviesByCategorye(trendingMovies);
  //   }
  // }, [canShowTrending]);
  // }, [canShowTrending, trendingMovies]);
  return (
    <>
      {
        trendingMovies && (
          <section>
            <div>
              <p>Home page</p>
              <Carousel />
              <Categoryes />
              {canShowTrending && <List dataMovies={trendingMovies} />}
            </div>
            {error && <p>${error.status_message}</p>}
          </section>
        )
        // : (
        //   <section>
        //     <div>
        //       <p>Home page</p>
        //       <Carousel />
        //       <Categoryes />
        //       {<List dataMovies={trendingMovies} />}
        //     </div>
        //     {error && <p>${error.status_message}</p>}
        //   </section>
        // )
      }
    </>
  );
}
export default HomePage;
