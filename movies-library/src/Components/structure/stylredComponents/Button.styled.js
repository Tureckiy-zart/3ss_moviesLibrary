import styled from "styled-components";


export const ButtonShrink = styled.button`
margin: ${(props) => props.margin};
margin-right: 0.5rem;
height: 1.2rem;
line-height: 1.2rem;
padding: 2px 6px;
border: none;
background: linear-gradient(
  to right,
  rgba(30, 213, 169, 1) 0%,
  rgba(1, 180, 228, 1) 100%
);
border-radius: 30px;
color: #fff;
cursor: pointer;
box-sizing: initial;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
&:focus {
  outline: none;
}
&:hover {
  color: rgba(3, 37, 65, 1);
  transition: 0;
}
&:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
`;

export const BntGroupe = styled.div`
  position: ${(props) => props.position || "initial"};
  bottom: ${(props) => props.bottom || "0"};
  left: ${(props) => props.left || "0"};
  display:flex;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  margin: ${(props) => props.margin};
  height: 46px;
  line-height: 46px;
  padding: 4px 20px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  box-sizing: initial;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:focus {
    outline: none;
  }
  &:hover {
    color: rgba(3, 37, 65, 1);
    transition: 0;
  }
  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
  }
`;

export const Button = (props) => {
  // console.log("props sssss:>> ", props);
  return <StyledButton {...props} />;
};

// position: ${(props) => props.position || "absolute"};
