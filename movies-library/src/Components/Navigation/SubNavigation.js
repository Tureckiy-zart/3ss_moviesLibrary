import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const SubNavigation = () => {
  const {url} = useRouteMatch();
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            // activeStyle={activeStyle}
            to={`${url}/cast`}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            // activeStyle={activeStyle}
            to={`${url}/reviews`}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigation;
