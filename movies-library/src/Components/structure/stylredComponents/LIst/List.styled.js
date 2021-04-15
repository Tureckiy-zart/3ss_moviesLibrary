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
  grid-template-columns: ${(props) =>
    props.gridTemplatCcolumns || "1fr 1fr 1fr 1fr 1fr"};
  grid-gap: 2vw;
`;

export const ListItem = styled.li`
  list-style: none;
`;
export const StyledGalleryListItem = styled.li`
  margin: ${(props) => props.margin};
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

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 16rem;
  /* height: 60%; */
  border-radius: 30px 30px 0 0;
  margin-bottom: 1rem;
  overflow: hidden;
  min-height: 24rem;
`;

export const InfoWrapper = styled.div`
  display: ${(props) => props.display};
  grid-template-columns: 15% 1fr;
  grid-gap: 2vw;
  padding: ${(props) => props.padding || "0 0.5rem"};
`;
export const Avatar = styled.img`
  max-width: 8rem;
  /* width: 16rem; */
  /* height: 60%; */
  /* border-radius: 30px 30px 0 0;
  margin-bottom: 1rem;
  overflow: hidden;
  min-height: 24rem; */
`;
