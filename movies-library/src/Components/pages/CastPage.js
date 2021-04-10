import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import useHistoryReturn from "../../Hooks/useHistoryReturn";
import { getMovieCast } from "../services/API/api";
import Form from "../structure/Form/Form";

const CastPage = () => {
  let { id } = useParams();
  const [goHome, goBack] = useHistoryReturn();
  const [cast, setCast] = useState(null);
  useEffect(() => getMovieCast(id).then((response) => setCast(response)), [id]);
  // console.log("useLocation() :>> ", useLocation());
  return (
    <>
      CastPage
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Home</button>
      <Form />
      {cast && (
        <ul>
          {cast.map(({ id, character, profile_path, name, popularity }) => (
            <li key={id}>
              <h2>{name}</h2>
              <p>Character: {character}</p>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w154/${profile_path}`
                    : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                }
                alt={name ? name : "No-name"}
                width="154"
              />
              <p>Popularity: {Number(popularity).toFixed(1)}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Home</button>
    </>
  );
};

export default CastPage;
