import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres } from "../../services/API/api";
import { Button } from "./Button.styled";

const CategoryeButtons = () => {
  const [categoryes, setCategoryes] = useState([]);
  const { location } = useHistory();
  useEffect(() => getGenres().then((response) => setCategoryes(response)), []); //set categoryes on mount

  return (
    <ul>
      {categoryes.map(({ id, name }) => (
        <Button key={id}>
          <Link
            to={{
              pathname: `/categoryes/${name}`,
              categoryeId: Number(`${id}`),
              // search: `${name}`,
              // hash: `#${original_title ? original_title : name}`,
              state: { ...location },
              // state: { from: location },
            }}
          >
            {name}
          </Link>
        </Button>
      ))}
    </ul>
  );
};

export default CategoryeButtons;
