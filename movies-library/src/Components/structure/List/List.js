import React, { memo } from "react";
import { useHistory } from "react-router";
import ButtonsHistoryReturn from "../Buttons/ButtonsHistoryReturn";
import ListItem from "../ListItem/ListItem";
import { StyledGalleryList } from "../stylredComponents/LIst/List.styled";

const List = ({ dataMovies }) => {
  const {
    location: { pathname },
  } = useHistory();

  const checkCurrentLocation = pathname.includes("/searchCollection");
  return (
    <>
      {dataMovies && (
        <>
          {checkCurrentLocation && <ButtonsHistoryReturn />}
          <StyledGalleryList>
            {dataMovies.map((item) => (
              <ListItem key={item.id} item={item} location={pathname} />
            ))}
          </StyledGalleryList>
          {checkCurrentLocation && <ButtonsHistoryReturn />}
        </>
      )}
    </>
  );
};

export default memo(List);
