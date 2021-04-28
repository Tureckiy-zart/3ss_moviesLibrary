import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "../structure/stylredComponents/List.styled";
import {
  NavWrapper,
  Nav,
  StyledNavigationLink,
  Logo,
} from "../structure/stylredComponents/Navigation.styled";
import { Container } from "../structure/stylredComponents/stiledComponents";
import routes from "../Routes/routesPath";

function Navigation() {
  return (
    <NavWrapper>
      <Container display="flex">
        <Link to="/">
          <Logo
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
          />
        </Link>
        <Nav>
          <ListItem>
            <StyledNavigationLink
              activeClassName="NavLinkActive"
              exact
              to={routes.home}
            >
              Home
            </StyledNavigationLink>
          </ListItem>
          <ListItem>
            <StyledNavigationLink
              activeClassName="NavLinkActive"
              to={routes.searchCollection}
            >
              Collections
            </StyledNavigationLink>
          </ListItem>
          <ListItem>
            <StyledNavigationLink
              activeClassName="NavLinkActive"
              to={routes.favorites}
            >
              Favorites
            </StyledNavigationLink>
          </ListItem>
        </Nav>
      </Container>
    </NavWrapper>
  );
}
export default Navigation;
