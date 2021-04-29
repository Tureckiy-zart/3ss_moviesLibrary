import React from "react";
import withData from "../../services/hoc/withFetch";
import {
  ButtonShrink,
  BntGroupe,
} from "../../structure/stylredComponents/Button.styled";
import { StyledList } from "../../structure/stylredComponents/List.styled";
import { StyledNavLink } from "../../structure/stylredComponents/Navigation.styled";

export const ButtonLink = withData(({ history, page }) => {
  // const capitalFirstLetter
  return (
    <div>
      <StyledNavLink
        color="black"
        to={{
          pathname: `${history.location.pathname}/${page}`,
          state: {
            from: history.location,
          },
          page: page,
        }}
      >
        <ButtonShrink>{page}</ButtonShrink>
      </StyledNavLink>
    </div>
  );
});

const SubNavigation = () => {
  return (
    <StyledList display="block">
      <BntGroupe>
        <ButtonLink page={"cast"} />
        <ButtonLink page={"crew"} />
        <ButtonLink page={"reviews"} />
      </BntGroupe>
    </StyledList>
  );
};

export default SubNavigation;
