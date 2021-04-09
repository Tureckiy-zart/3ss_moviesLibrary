import React, { useEffect } from "react";
import { getTrendingMovies } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import useLoading from "../../Hooks/useLoading";
import List from "../structure/List/List";
import Carousel from "../Carousel/Carousel";
import CategoryeButtons from "../structure/Buttons/CategoryeButtons";
import { CategoryesContextProvider } from "../services/Contexts/CategoryesContext";
import { useRouteMatch } from "react-router";
import SearchMovie from "./SearchMovie";
import { SearchContextProvider } from "../services/Contexts/SearchContext";
function HomePage() {
  const [state] = useData(null);

  const [{ trendingMovies, error }, setState] = useData(null); //Global state
  const moviesByCategoryeFetched = useLoading(getTrendingMovies); //Uploading data on scroll
  const { path } = useRouteMatch();
  useEffect(() => {
    if (trendingMovies.length > 0) return;
    //write to the state of the loaded data after first render
    setState((prev) => ({ ...prev, isLoading: true }));

    getTrendingMovies({ page: 1 })
      .then((response) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          trendingMovies: response,
          currentHomePage: 2,
          currentSection: `${path}`,
        }));
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

  useEffect(() => {
    if (!moviesByCategoryeFetched.length) return;
    setState((prev) => ({
      ...prev,
      trendingMovies: [...prev.trendingMovies, ...moviesByCategoryeFetched],
      currentHomePage: prev.currentHomePage + 1,
    }));
  }, [moviesByCategoryeFetched]);

  return (
    <>
      <SearchContextProvider/>    
       {/* // можно ли так делать, это нормально? */}
        {/* <SearchMovie />
      </SearchContextProvider> */}
      {trendingMovies && (
        <section>
          <div>
            <p>Home page</p>
            <Carousel />
            <CategoryesContextProvider>
              <CategoryeButtons />
            </CategoryesContextProvider>

            {/* {canShowTrending && <List dataMovies={trendingMovies} />} */}
            <List dataMovies={trendingMovies} />
          </div>
          {error && <p>${error.status_message}</p>}
        </section>
      )}
    </>
  );
}
export default HomePage;
