import React from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { Ul, Ul__item } from "../structure/stylredComponents/stiledComponents";

const SubNavigation = () => {
  const { location } = useHistory();
  const { url } = useRouteMatch();

  return (
    <nav>
      <Ul>
        <Ul__item>
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
        </Ul__item>
        <Ul__item>
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
        </Ul__item>
      </Ul>
    </nav>
  );
};

export default SubNavigation;
