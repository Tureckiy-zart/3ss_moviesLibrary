import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Ul,
  UlItem,
} from "../structure/stylredComponents/stiledComponents";
import "./Navigation.scss";
function Navigation() {
  return (
    <Container>
      <nav>
        <Ul>
          <UlItem>
            <NavLink
              className="NavLink"
              activeClassName="NavLinkActive"
              exact
              to="/"
            >
              Home
            </NavLink>
          </UlItem>
          <UlItem>
            <NavLink
              className="NavLink"
              activeClassName="NavLinkActive"
              to="/searchCollection"
            >
              Collections
            </NavLink>
          </UlItem>
          <UlItem>
            <NavLink
              className="NavLink"
              activeClassName="NavLinkActive"
              to="/favorites"
            >
              Favorites
            </NavLink>
          </UlItem>
        </Ul>
      </nav>
    </Container>
  );
}
export default Navigation;
