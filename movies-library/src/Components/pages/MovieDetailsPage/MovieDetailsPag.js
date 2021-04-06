import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieByID } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import SubNavigation from "../../Navigation/SubNavigation";
import useHistoryReturn from "../../../Hooks/useHistoryReturn";

const MovieDetailsPage = () => {
  let { id } = useParams();
  const [goHome, goBack] = useHistoryReturn();
  const [response, setResponse] = useState(null);
  const [, setState] = useData();
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
        console.log("error :>> ", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.response.data ? error.response.data : error,
        }));
        // throw new Error(error.response.data);
        throw new Error(error);
      });
  }, [id, setState]);

  return (
    <section>
      MovieDetailsPage
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
          </div>
          <div>
            <div>
              <span>Release:</span>
              <span>
                {response.release_date
                  ? response.release_date
                  : response.first_air_date}
              </span>
            </div>
            <div>
              <span>Rating IMDB:</span>
              <span> {response.vote_average}</span>
            </div>
            <div>
              <span>Vote count:</span>
              <span>{response.vote_count}</span>
            </div>
            <p>{response.overview}</p>
            <a href={response.homepage}>Movie Page</a>
          </div>
          <button onClick={goBack}>Go Back</button>
          <button onClick={goHome}>Home</button>
          <SubNavigation response={response} />
        </div>
      )}
    </section>
    // {}
  );
};

export default memo(MovieDetailsPage);
