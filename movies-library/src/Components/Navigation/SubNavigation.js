import React from "react";
import { NavLink } from "react-router-dom";

const SubNavigation = ({ response }) => (
  <nav>
    <ul>
      <li>
        <NavLink
          // activeStyle={activeStyle}
          to={`/asset/${response.id}/cast`}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          // activeStyle={activeStyle}
          to={`/asset/${response.id}/reviews`}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default SubNavigation;
