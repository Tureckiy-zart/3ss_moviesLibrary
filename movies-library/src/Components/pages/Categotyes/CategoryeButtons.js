import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres } from "../../services/API/api";
import { Button } from "../../structure/stylredComponents/Button.styled";
import {
  ComponentWrapper,
  Container,
  StyledList,
} from "../../structure/stylredComponents/stiledComponents";

const CategoryeButtons = () => {
  const [categoryes, setCategoryes] = useState([]);
  const { location } = useHistory();
  useEffect(() => getGenres().then((response) => setCategoryes(response)), []); //set categoryes on mount

  return (
    <ComponentWrapper>
      <Container>
        {categoryes && (
          <StyledList>
            {categoryes.map(({ id, name }) => (
              <Link key={id}
                to={{
                  pathname: `/categoryes/${name}`,
                  categoryeId: Number(`${id}`),
                  state: { from: location }, // not used yet
                  // search: `${name}`,
                  // hash: `#${original_title ? original_title : name}`,
                  // state: { ...location },
                }}
              >
                <Button margin="0 0.5rem  0.5rem 0" >
                  {name}
                </Button>
              </Link>
            ))}
          </StyledList>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default CategoryeButtons;
