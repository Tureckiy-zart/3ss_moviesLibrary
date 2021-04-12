import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres } from "../../services/API/api";
import { Button } from "../../structure/stylredComponents/Button.styled";

const CategoryeButtons = () => {
  const [categoryes, setCategoryes] = useState([]);
  const { location } = useHistory();
  useEffect(() => getGenres().then((response) => setCategoryes(response)), []); //set categoryes on mount

  return (
    <ul>
      {categoryes.map(({ id, name }) => (
        <Link
          to={{
            pathname: `/categoryes/${name}`,
            categoryeId: Number(`${id}`),
            state: { from: location }, // not used yet
            // search: `${name}`,
            // hash: `#${original_title ? original_title : name}`,
            // state: { ...location },
          }}
        >
          <Button key={id}>{name}</Button>
        </Link>
      ))}
    </ul>
  );
};

export default CategoryeButtons;
