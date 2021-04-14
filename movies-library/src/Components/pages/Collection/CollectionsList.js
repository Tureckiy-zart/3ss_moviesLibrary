import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledListItem } from "../../structure/stylredComponents/LIst/List.styled";

function CollectionsList({ item }) {
  const { location } = useHistory();
  const { id, title, name, original_title, poster_path, overview } = item;
  return (
    <>
      {item ? (
        <StyledListItem>
          <Link
            to={{
              pathname: `/${"searchCollection"}/${id}`,
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
            <p> {overview}</p>
          </Link>
        </StyledListItem>
      ) : null}
    </>
  );
}
export default memo(CollectionsList);
