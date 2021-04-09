import React, { memo, useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import useHistoryReturn from "../../Hooks/useHistoryReturn";
import { getMovieByID } from "../services/API/api";
import { useData } from "../services/Contexts/DataContext";
import { Button } from "../structure/Buttons/Button.styled";
import SubNavigation from "../Navigation/SubNavigation";

import useFavorites from "../../Hooks/useFavorites";
const MovieDetailsPage = () => {
  let { id } = useParams();
  const [goHome, goBack] = useHistoryReturn();
  const [response, setResponse] = useState(null);
  const [state, setState] = useData();
  const [, setLocalStorageValue, setRemoveLocalStorage] = useFavorites();
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    getMovieByID(id)
      .then((response) => {
        setResponse(response);
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          // error: error.response.data ? error.response.data : error,
          error: error,
        }));
        console.log("error :>> ", error);

        // console.log('state :>> ', state);
        <Redirect to={'/'}/>
        // throw new Error(error.response.data);
        throw new Error(error);
      });
  }, [id, setState]);

  const addFavorite = () => setLocalStorageValue(response);
  const removeLocalStorage = () => setRemoveLocalStorage(response);
// console.log('response :>> ', response);
  return (
    <section>
      MovieDetailsPage
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Home</button>
      {response && (
        <div>
          <h2>{response.title}</h2>
          <div>
            <img
              src={
                response.poster_path
                  ? `https://image.tmdb.org/t/p/w154/${response.poster_path}`
                  : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
              }
              alt={response.title ? response.title : response.name}
              width="250"
            />
            <Button onClick={addFavorite}>add to favorites</Button>
            <Button onClick={removeLocalStorage}>remove</Button>
          </div>
          <div>
            <div>
              <span>Release: </span>
              <span>
                {response.release_date
                  ? response.release_date
                  : response.first_air_date}
              </span>
            </div>
            <div>
              <span>Rating IMDB: </span>
              <span> {response.vote_average}</span>
            </div>
            <div>
              <span>Vote count: </span>
              <span>{response.vote_count}</span>
            </div>
            <p>{response.overview}</p>
            <a href={response.homepage}>Movie Page</a>
          </div>
          <SubNavigation />
          <Button bgc="blue" onClick={goBack}>
            Go Back
          </Button>
          <Button bgc="red" onClick={goHome}>
            Home
          </Button>
        </div>
      )}
    </section>
    // {}
  );
};

export default memo(MovieDetailsPage);
