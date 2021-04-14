import React from "react";
import styled from "styled-components";
import {
  Container,

  NavWrapper,
  StyledNavLink,
  StyledList,
  StyledListItem,

} from "../structure/stylredComponents/stiledComponents";
const Logo = styled.img`
  width: 400px;
`;
const Nav = styled.nav`
  margin: 0 auto;
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
              <StyledNavLink
                className="navigation link"
                className="NavLink"
                activeClassName="NavLinkActive"
                exact
                to="/"
              >
                Home
              </StyledNavLink>
            </StyledListItem>
            <StyledListItem>
              <StyledNavLink
                className="NavLink"
                activeClassName="NavLinkActive"
                to="/searchCollection"
              >
                Collections
              </StyledNavLink>
            </StyledListItem>
            <StyledListItem>
              <StyledNavLink
                className="NavLink"
                activeClassName="NavLinkActive"
                to="/favorites"
              >
                Favorites
              </StyledNavLink>
            </StyledListItem>
          </StyledList>
        </Nav>
      </Container>
    </NavWrapper>

  );
}
export default Navigation;
