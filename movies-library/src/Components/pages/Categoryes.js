import React, { memo, useEffect, useState } from "react";
import useLoading from "../../Hooks/useLoading";
import { getGenres, getMovieByGenre } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import { Button } from "../structure/Buttons/Button.styled";
import List from "../structure/List/List";

const Categoryes = () => {
  const [{ moviesByCategorye, currentPage }, setState] = useData(null);
  const [state] = useData(null);
  const [categoryeId, setCategoryeId] = useState(null);
  const [categoryes, setCategoryes] = useState([]);
  const moviesByCategoryeFetched = useLoading(getMovieByGenre, {
    genre: categoryeId,
    page: currentPage,
  }); //Uploading data on scroll
  useEffect(() => getGenres().then((response) => setCategoryes(response)), []); //set categoryes on mount

  useEffect(() => {
    if (!categoryeId) return;
    setState((prev) => ({ ...prev, isLoading: true }));

    getMovieByGenre({ genre: categoryeId }).then(
      (response) => {
        // setMoviesByCategorye(response);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          canShowTrending: false,
          moviesByCategorye: response,
        }));
      }
      // setCurrentPage((prev) => prev + 1) //page enlargement
    );
  }, [categoryeId, setState]);
  // }, [categoryeId, setCurrentPage, setState]);

  useEffect(() => {
    if (moviesByCategoryeFetched) {
      setState((prev) => ({
        ...prev,
        moviesByCategorye: [
          ...prev.moviesByCategorye,
          ...moviesByCategoryeFetched,
        ],
      }));
      // setMoviesByCategorye((prev) => [...prev, ...moviesByCategoryeFetched]);
    }
  }, [moviesByCategoryeFetched]);
  // }, [moviesByCategoryeFetched]);
  //   <Link
  //   to={{
  //     pathname: `/categoryes/${name}`,
  //     // search: "?category=adventure",
  //     // hash: `#${original_title ? original_title : name}`,
  //     // state: { from: location },
  //   }}
  // >
  //   {name}
  // </Link>
  return (
    <>
      {categoryes && (
        <>
          <ul>
            {categoryes.map(({ id, name }) => (
              <Button
                key={id}
                onClick={() => {
                  setCategoryeId(id);
                }}
              >
                {name}
                {/* <Link
                  to={{
                    pathname: `/categoryes/${name}`,
                    // search: "?category=adventure",
                    // hash: `#${original_title ? original_title : name}`,
                    // state: { from: location },
                  }}
                >
                  {name}
                </Link> */}
              </Button>
            ))}
          </ul>
          {/* {moviesByCategorye && <List dataMovies={state.categorye} />} */}
          {moviesByCategorye && <List dataMovies={moviesByCategorye} />}
        </>
      )}
    </>
  );
};

export default memo(Categoryes);
