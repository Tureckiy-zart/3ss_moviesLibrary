import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieCast } from "../../services/API/api";

import ButtonsHistoryReturn from "../../structure/Buttons/ButtonsHistoryReturn";
import { StyledList, StyledListItem } from "../../structure/stylredComponents/LIst/List.styled";

const CastPage = () => {
  let { id } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => getMovieCast(id).then((response) => setCast(response)), [id]);
  return (
    <>
      <ButtonsHistoryReturn />
      {cast && (
        <StyledList>
          {cast.map(({ id, character, profile_path, name, popularity }) => (
            <StyledListItem key={id}> 
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
            </StyledListItem>
          ))}
        </StyledList>
      )}
      <ButtonsHistoryReturn />
    </>
  );
};

export default CastPage;
