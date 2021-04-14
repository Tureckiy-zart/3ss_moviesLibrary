import React from "react";
import styled from "styled-components";
import {
  StyledList,
  StyledListItem,
} from "../structure/stylredComponents/LIst/List.styled";
import {
  NavWrapper,
  Nav,
  StyledNavLink,
  StyledNavigationLink,
} from "../structure/stylredComponents/Navigation/Navigation.styled";
import { Container } from "../structure/stylredComponents/stiledComponents";
const Logo = styled.img`
  width: 400px;
`;

function Navigation() {
  return (
    <NavWrapper className="NavWrapper">
      <Container display="flex">
        <Logo
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="logo"
        />
        <Nav className="navigation">
          <StyledList className="navigation StyledList">
            <StyledListItem className="navigation list__item">
              <StyledNavigationLink
                className="navigation link"
                className="NavLink"
                activeClassName="NavLinkActive"
                exact
                to="/"
              >
                Home
              </StyledNavigationLink>
            </StyledListItem>
            <StyledListItem>
              <StyledNavigationLink
                className="NavLink"
                activeClassName="NavLinkActive"
                to="/searchCollection"
              >
                Collections
              </StyledNavigationLink>
            </StyledListItem>
            <StyledListItem>
              <StyledNavigationLink
                className="NavLink"
                activeClassName="NavLinkActive"
                to="/favorites"
              >
                Favorites
              </StyledNavigationLink>
            </StyledListItem>
          </StyledList>
        </Nav>
      </Container>
    </NavWrapper>
  );
}
export default Navigation;
