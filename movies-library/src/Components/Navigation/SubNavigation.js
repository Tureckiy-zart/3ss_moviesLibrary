import React from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { Ul, UlItem } from "../structure/stylredComponents/stiledComponents";

const SubNavigation = () => {
  const { location } = useHistory();
  const { url } = useRouteMatch();

  return (
    <nav>
      <Ul>
        <UlItem>
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
        </UlItem>
        <UlItem>
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
        </UlItem>
      </Ul>
    </nav>
  );
};

export default SubNavigation;
