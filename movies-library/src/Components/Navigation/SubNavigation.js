import React from "react";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";

const SubNavigation = () => {
  const { location } = useHistory();

  const { url } = useRouteMatch();
  return (
    <nav>
      <ul>
        <li>
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
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigation;
