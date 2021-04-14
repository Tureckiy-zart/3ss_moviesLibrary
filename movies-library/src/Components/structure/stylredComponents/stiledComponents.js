import styled from "styled-components";
import { NavLink } from "react-router-dom";

// $colors: {
//   lightGrey: 227, 227, 227;
//   White: 255, 255, 255, 1;
//   DarkBlue: 3, 37, 65, 1;
//   LightGreen: 30, 213, 16, 1;
//   LightBlue: 1, 180, 228, 1;
// }
// const DarkBlue = "227, 227, 227, 1";
export const ComponentWrapper = styled.div`
  margin-bottom: 2rem;
`;


export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0;
  padding: 0;
  background-color: rgba(3, 37, 65, 0.9);
`;

const activeClassName = "NavLinkActive";
export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: none;
  padding: 3px;
  color: white;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
  &.${activeClassName} {
    background: red;
  }
`;

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 1440px;
  display: ${(props) => props.display};
  align-items: center;
`;
export const Container = (props) => {
  return <StyledContainer {...props} />;
};

  
  export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledListItem = styled.li`
  width: 14rem;
  list-style: none;
`;
export const ReturnBntGroupe = styled.div`
  background-color: #323232;
`;

