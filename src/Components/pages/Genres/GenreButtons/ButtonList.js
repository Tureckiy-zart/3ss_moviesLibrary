import React from "react";
import { StyledList } from "../../../structure/stylredComponents/List.styled";
import ButtonListItem from "./ButtonListItem";

const ButtonList = ({ categoryes }) => {
  return (
    <StyledList justifyContent="center">
      {categoryes.map((categorye) => (
        <ButtonListItem key={categorye.id} {...categorye} />
      ))}
    </StyledList>
  );
};

export default ButtonList;
