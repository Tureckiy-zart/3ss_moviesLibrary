import React, { memo } from "react";
import { useHistory } from "react-router";
import ButtonsHistoryReturn from "../Buttons/ButtonsHistoryReturn";
import ListItem from "../ListItem/ListItem";
import { Ul } from "../stylredComponents/stiledComponents";

const List = ({ dataMovies }) => {
  const {
    location: { pathname },
  } = useHistory();

  const checkCurrentLocation = pathname.includes("/searchCollection");
  return (
    <>
      {dataMovies && (
        <>
          {/* {checkCurrentLocation && <ButtonsHistoryReturn />} */}
          <Ul>
            {dataMovies.map((item) => (
              <ListItem key={item.id} item={item} location={pathname} />
            ))}
          </Ul>
          {/* {checkCurrentLocation && <ButtonsHistoryReturn />} */}
        </>
      )}
    </>
  );
};

export default memo(List);
