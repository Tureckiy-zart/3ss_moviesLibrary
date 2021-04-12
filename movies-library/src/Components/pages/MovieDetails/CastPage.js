import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieCast } from "../../services/API/api";
import {
  Ul,
  Ul__item,
} from "../../structure/stylredComponents/stiledComponents";
import ButtonsHistoryReturn from "../../structure/Buttons/ButtonsHistoryReturn";

const CastPage = () => {
  let { id } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => getMovieCast(id).then((response) => setCast(response)), [id]);
  return (
    <>
      <ButtonsHistoryReturn />
      {cast && (
        <Ul>
          {cast.map(({ id, character, profile_path, name, popularity }) => (
            <Ul__item key={id}> 
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
            </Ul__item>
          ))}
        </Ul>
      )}
      <ButtonsHistoryReturn />
    </>
  );
};

export default CastPage;
