import React from "react";
import { Link, useHistory } from "react-router-dom";
import { BasicButton } from "../../../structure/stylredComponents/Button.styled";
import { ListItem } from "../../../structure/stylredComponents/List.styled";

const ButtonListItem = ({ id, name }) => {
  const { location } = useHistory();

  return (
    <ListItem>
      <Link
        to={{
          pathname: `/categoryes/${name}`,
          categoryeId: Number(`${id}`),
          state: { from: location },
        }}
      >
        <BasicButton margin="0 0.5rem 0.5rem 0">{name}</BasicButton>
      </Link>
    </ListItem>
  );
};

export default ButtonListItem;
