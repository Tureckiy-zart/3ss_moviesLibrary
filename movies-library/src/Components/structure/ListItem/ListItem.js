import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledListItem } from "../stylredComponents/stiledComponents";

function ListItem({ item }) {
  //   console.log("location :>> ", location);
  // console.log('item :>> ', item);
  const { location } = useHistory();
  const {
    id,
    title,
    name,
    original_title,
    vote_average,
    poster_path,
    backdrop_path,
    overview = "",
  } = item;
  return (
    <StyledListItem>
      <Link
        to={{
          pathname: `/asset/${id}`,
          hash: `#${original_title ? original_title : name}`,
          state: { from: location },
        }}
      >
        <h2>{original_title ? original_title : name}</h2>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w154/${poster_path}`
              : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
          }
          alt={title ? title : name}
          width="154"
        />
        {vote_average && <p> Votes: {vote_average}</p>}
        {location.pathname === "/searchCollection/" && overview && (
          <p> {overview}</p>
        )}
      </Link>
    </StyledListItem>
  );
}
export default memo(ListItem);
