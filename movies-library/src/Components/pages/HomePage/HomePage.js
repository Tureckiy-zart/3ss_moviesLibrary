import React, { memo, useEffect, useState } from "react";
import useFetch from "../../../Hooks/useFetch";
import { useData } from "../../services/Contexts/DataContext";
import List from "../../structure/List/List";
import { getTrendingMovies } from "../../services/API/api";
// useEffect(() => {
//   doFetch(currentPage);
// }, [currentPage]);
// const doFetch = useFetch();
function HomePage() {
  const [state, setState] = useData();
  const [{ dataMovies, error }] = useData();
  const [currentPage, steCurrentPage] = useState(1);
  const [isFetching, setisFetching] = useState(false);

  useEffect(() => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      getTrendingMovies().then((response) => {
        console.log("response :>> ", response);
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
    }
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    setState((prev) => ({ ...prev, isLoading: true }));

    // try {
    getTrendingMovies(currentPage)
      .then((response) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          dataMovies: [...prev.dataMovies, ...response],
        }));
        steCurrentPage((prev) => {
          return prev + 1;
        });
      })
      .catch()
      .finally(() => setisFetching(false));
    // } catch (error) {
    //   setState((prev) => ({
    //     ...prev,
    //     isLoading: false,
    //     error: error.response.data,
    //   }));
    //   throw new Error(error.response.data);
    // }
  }, [isFetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = ({ target }) => {
    if (!scrollCalculate({ target })) return;
    setisFetching(true);
  };
  const scrollCalculate = ({ target }) => {
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 200) return true;
  };
  console.log("da :>> ", dataMovies);
  console.log("currentPage 2:>> ", currentPage);

  return (
    <>
      <p>Home page</p>
      {/* <button onClick={goBack}>Next</button> */}

      {dataMovies && (
        <section>
          <List dataMovies={dataMovies} />
        </section>
      )}
      {error && <p>${error.status_message}</p>}
    </>
  );
}
export default memo(HomePage);
