import React, { useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { getMovieByTitle } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import { useSearchContext } from "../services/Contexts/SearchContext";
import Form from "../structure/Form/Form";
import List from "../structure/List/List";
const queryString = require("query-string");

const SearchMovie = () => {
  const [{ searchedMovies }, setState] = useData();
  const history = useHistory();
  //   const history = useHistory();
  const { search, pathname } = useLocation();
  const [{ searchQuery }] = useSearchContext();
  const { path } = useRouteMatch();
  console.log("history(); :>> ", history.location.search);
//   console.log("searchQuery ssssss:>> ", searchQuery);
//   console.log("path :>> ", path);

  useEffect(() => {
      const parsedHash = queryString.parse(history.location.search);
      console.log('parsedHash',Object.keys(parsedHash).toString());  // через такие матюки
    if (!searchQuery) return;

    setState((prev) => ({ ...prev, isLoading: true }));

    getMovieByTitle({ searchQuery, page: 1 })
      .then((response) => {
        console.log("response :>> ", response);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          searchedMovies: response,
          currentHomePage: 2,
          currentSection: `${pathname}`,
          // currentSection: `${path}`,
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
  }, [searchQuery]);

  return <Form />;
};

export default SearchMovie;
