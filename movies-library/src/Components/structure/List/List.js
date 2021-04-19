import React, { memo } from "react";
import { useHistory } from "react-router";
import {ButtonsHistoryReturn} from "../Buttons/ButtonsHistoryReturn";
import ListItem from "../ListItem/ListItem";
import { StyledGalleryList } from "../stylredComponents/List.styled";
import { Container } from "../stylredComponents/stiledComponents";

const List = ({ dataMovies }) => {
  const {
    location: { pathname },
  } = useHistory();

  const checkCurrentLocation = pathname.includes("/searchCollection");
  return (
    <Container>
      {dataMovies && (
        <>
          {checkCurrentLocation && <ButtonsHistoryReturn />}
          <StyledGalleryList> 
            {dataMovies.map((item) => (
              <ListItem key={item.id} item={item} location={pathname} />
            ))}
            {/* <ScrollUpBtn /> */}
          </StyledGalleryList>
        </>
      )}
    </Container>
  );
};

export default memo(List);
