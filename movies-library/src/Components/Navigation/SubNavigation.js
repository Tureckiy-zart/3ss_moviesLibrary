import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  ButtonShrink,
  BntGroupe,
} from "../structure/stylredComponents/Button.styled";
import {
  StyledList,
  ListItem,
} from "../structure/stylredComponents/List.styled";
import {
  StyledNavigationLink,
  StyledNavLink,
} from "../structure/stylredComponents/Navigation.styled";

const SubNavigation = () => {
  const { location } = useHistory();
  const { url } = useRouteMatch();

  return (
    <nav>
      <StyledList display="block">
        <BntGroupe>
          <ListItem>
            <StyledNavLink
              color="black"
              to={{
                pathname: `${url}/cast`,
                state: { from: location },
              }}
            >
              <ButtonShrink>Cast</ButtonShrink>
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink
              color="black"
              to={{
                pathname: `${url}/reviews`,
                state: { from: location },
              }}
            >
              <ButtonShrink>Reviews</ButtonShrink>
            </StyledNavLink>
          </ListItem>
        </BntGroupe>
      </StyledList>
    </nav>
  );
};

export default SubNavigation;
