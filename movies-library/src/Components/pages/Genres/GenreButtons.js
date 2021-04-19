import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres } from "../../services/API/api";
import { Button } from "../../structure/stylredComponents/Button.styled";
import {
  StyledList,
  ListItem,
} from "../../structure/stylredComponents/List.styled";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";

const CategoryeButtons = () => {
  const [categoryes, setCategoryes] = useState([]);
  const { location } = useHistory();
  useEffect(() => getGenres().then((response) => setCategoryes(response)), []); //set categoryes on mount

  return (
    <ComponentWrapper position="relative" top="720px">
      <Container>
        {categoryes && (
          <StyledList justifyContent="center">
            {categoryes.map(({ id, name }) => (
              <ListItem>
                <Link
                  key={id}
                  to={{
                    pathname: `/categoryes/${name}`,
                    categoryeId: Number(`${id}`),
                    state: { from: location }, // not used yet
                  }}
                >
                  <Button margin="0 0.5rem 0.5rem 0">{name}</Button>{" "}
                </Link>
              </ListItem>
            ))}
          </StyledList>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default CategoryeButtons;
