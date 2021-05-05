import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

};
  * { margin: 0;
  padding: 0;
  box-sizing: border-box;
};

`;

// $colors: {
//   lightGrey: 227, 227, 227;
//   White: 255, 255, 255, 1;
//   DarkBlue: 3, 37, 65, 1;
//   LightGreen: 30, 213, 16, 1;
//   LightBlue: 1, 180, 228, 1;
// }
// const DarkBlue = "227, 227, 227, 1";

// export const ComponentWrapper = styled.div`
export const ComponentWrapper = styled.section`
  position: ${(props) => props.position || "static"};
  top: ${(props) => props.top};
  /* display: ${(props) => props.display}; */
  ${({ grid }) => {
    grid &&
      css`
        place-items: center;
      `;
  }}
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: 2rem;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor || "white"};
`;
const StyledContainer = styled.div`
  margin: 0 auto;
  margin-bottom: ${(props) => props.marginBottom};

  padding: 0;
  width: 1200px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection || "row"};
`;
export const Container = (props) => {
  return <StyledContainer {...props} />;
};

export const ExternalLink = styled.a`
  /* text-decoration: none; */
  color: black;
`;
export const InnerLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 2vw;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 2rem;
`;
