import React, { memo, useEffect } from "react";
import { getTrendingMovies, getMovieByGenre } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import useLoading from "../../../Hooks/useLoading";
import List from "../../structure/List/List";
function HomePage() {
  const [{ dataMovies, error }, setState] = useData(); //global state
  const steCurrentPage = useLoading(getTrendingMovies); //uploadind data on scroll
  useEffect(() => {
    //write to the state of the loaded data after first render
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      getTrendingMovies().then((response) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          dataMovies: response,
        }));
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
  return (
    <>
      <p>Home page</p>

      {dataMovies.length && (
        <section>
          <List dataMovies={dataMovies} />
        </section>
      )}
      {error && <p>${error.status_message}</p>}
    </>
  );
}
export default memo(HomePage);
