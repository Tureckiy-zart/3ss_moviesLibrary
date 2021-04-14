import styled from "styled-components";
// const StyledList = (prpos) => <StyledList {...props} />;
export const StyledList = styled.ul`
  display: ${(props) => props.display || "flex"};
  flex-wrap: wrap;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  align-items: center;
`;

export const StyledGalleryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2vw;
`;

export const StyledListItem = styled.li`
  list-style: none;
`;
export const StyledGalleryListItem = styled.li`
  width: 16rem;
  min-height: 35rem;
  background: transparent;
  border-radius: 30px 30px 0 0;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  list-style: none;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
