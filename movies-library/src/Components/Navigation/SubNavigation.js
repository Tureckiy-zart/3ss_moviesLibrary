import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  ButtonShrink,
  BntGroupe,
} from "../structure/stylredComponents/Button.styled";
import {
  StyledList,
  StyledListItem,
} from "../structure/stylredComponents/LIst/List.styled";
import {
  StyledNavigationLink,
  StyledNavLink,
} from "../structure/stylredComponents/Navigation/Navigation.styled";

const SubNavigation = () => {
  const { location } = useHistory();
  const { url } = useRouteMatch();

  return (
    <nav>
      <StyledList display="block">
        <BntGroupe>
          <StyledListItem>
            <StyledNavLink
              color="black"
              to={{
                pathname: `${url}/cast`,
                state: { from: location },
              }}
            >
              <ButtonShrink>Cast</ButtonShrink>
            </StyledNavLink>
          </StyledListItem>
          <StyledListItem>
            <StyledNavLink
              color="black"
              to={{
                pathname: `${url}/reviews`,
                state: { from: location },
              }}
            >
              <ButtonShrink>Reviews</ButtonShrink>
            </StyledNavLink>
          </StyledListItem>
        </BntGroupe>
      </StyledList>
    </nav>
  );
};

export default SubNavigation;
