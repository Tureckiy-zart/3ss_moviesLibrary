import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Ul,
  Ul__item,
} from "../structure/stylredComponents/stiledComponents";
import "./Navigation.scss";
function Navigation() {
  return (
    <Container>
      <nav>
        <Ul>
          <Ul__item>
            <NavLink
              className="NavLink"
              activeClassName="NavLinkActive"
              exact
              to="/"
            >
              Home
            </NavLink>
          </Ul__item>
          <Ul__item>
            <NavLink
              className="NavLink"
              activeClassName="NavLinkActive"
              to="/searchCollection"
            >
              Collections
            </NavLink>
          </Ul__item>
          <Ul__item>
            <NavLink
              className="NavLink"
              activeClassName="NavLinkActive"
              to="/favorites"
            >
              Favorites
            </NavLink>
          </Ul__item>
        </Ul>
      </nav>
    </Container>
  );
}
export default Navigation;
