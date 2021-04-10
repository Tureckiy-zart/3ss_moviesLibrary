import React, { memo } from "react";
import { useHistory } from "react-router";
import ListItem from "../ListItem/ListItem";
import { Ul } from "../stiledComponents";


const List = ({ dataMovies }) => {
  const {
    location: { pathname },
  } = useHistory();

  return (
    <Ul>
      {dataMovies.map((item) => (
        <ListItem key={item.id} item={item} location={pathname} />
      ))}
    </Ul>
  );
};

export default memo(List);
