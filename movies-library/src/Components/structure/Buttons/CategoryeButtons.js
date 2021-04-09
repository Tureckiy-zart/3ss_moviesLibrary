import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useCategoryesContext } from "../../services/Contexts/CategoryesContext";
import { getGenres } from "../../services/API/api";
import { Button } from "./Button.styled";

const CategoryeButtons = () => {
  const [categoryes, setCategoryes] = useState([]);
  const [, setCategoryeData] = useCategoryesContext(); //Categoryes global state
  useEffect(() => getGenres().then((response) => setCategoryes(response)), []); //set categoryes on mount
  const { location } = useHistory();

  return (
    <ul>
      {categoryes.map(({ id, name }) => (
        <Button
          key={id}
          onClick={() => {
            setCategoryeData({
              categoryeId: `${id}`,
            });
          }}
        >
          <Link
            to={{
              pathname: `/categoryes/${name}`,
              // search: `?category=${name}`,
              // hash: `#${original_title ? original_title : name}`,
              state: { from: location },
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
