import React from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

import { StyledList, StyledListItem } from "../structure/stylredComponents/stiledComponents";


const SubNavigation = () => {
  const { location } = useHistory();
  const { url } = useRouteMatch();

  return (
    <nav>
      <StyledList>
        <StyledListItem>

          <NavLink
            // activeStyle={activeStyle}
            // to={`${url}/cast`}
            to={{
              pathname: `${url}/cast`,
              // search: `${name}`,
              state: { from: location },
            }}
          >
            Cast
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink
            // activeStyle={activeStyle}
            to={{
              pathname: `${url}/reviews`,
              // search: `${name}`,
              state: { from: location },
            }}
          >
            Reviews
          </NavLink>
        </StyledListItem>
      </StyledList>
    </nav>
  );
};

export default SubNavigation;
