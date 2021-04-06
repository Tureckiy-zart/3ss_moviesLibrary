import React, { memo } from "react";
import { Link } from "react-router-dom";

function ListItem({ item, location }) {
  //   console.log("location :>> ", location);
  // console.log('item :>> ', item);
  const { id, title, name, original_title, vote_average, poster_path } = item;
  return (
    <li>
      <Link
        to={{
          pathname: `/asset/${id}`,
          // search: "?category=adventure",
          hash: `#${original_title? original_title : name}`,
          state: { from: location },
        }}
      >
        <h2>{original_title? original_title : name}</h2>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w154/${poster_path}`
              : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
          }
          alt={title ? title : name}
          width="154"
        />
        <p> Votes: {vote_average}</p>
      </Link>
    </li>
  );
}
export default memo(ListItem);
