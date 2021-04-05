import React from "react";
import { useHistory } from "react-router";
import ListItem from "../ListItem/ListItem";
const List = ({ dataMovies }) => {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <ul>
      {dataMovies.map((item) => (
        <ListItem key={item.id} item={item} location={pathname} />
      ))}
    </ul>
  );
};

export default List;
