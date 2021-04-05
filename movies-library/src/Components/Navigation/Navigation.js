import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/asset">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/serials">Serials</NavLink>
        </li>
        <li>
          <NavLink to="/cartoons">Сartoons</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
