import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
margin-top:100px;
/* width:1440px; */
/* margin-top:100px */
`
// $colors: {
//   lightGrey: 227, 227, 227;
//   White: 255, 255, 255, 1;
//   DarkBlue: 3, 37, 65, 1;
//   LightGreen: 30, 213, 16, 1;
//   LightBlue: 1, 180, 228, 1;
// }
// const DarkBlue = "227, 227, 227, 1";
export const ComponentWrapper = styled.div`
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  margin-bottom: 3rem;
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
// export const ExternalLink = (props) => {
//   return <StyledContainer {...props} />;
// };

export const ExternalLink = styled.a`
  text-decoration: none;
  color: black;
`;
export const InnerLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
