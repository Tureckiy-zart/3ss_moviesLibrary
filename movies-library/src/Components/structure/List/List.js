import React, { memo } from "react";
import { useHistory } from "react-router";
import useHistoryReturn from "../../../Hooks/useHistoryReturn";
import ListItem from "../ListItem/ListItem";
import { Ul } from "../stylredComponents/stiledComponents";

const List = ({ dataMovies }) => {
  const {
    location: { pathname },
  } = useHistory();
  const [goHome, goBack] = useHistoryReturn();
  // const s = useHistoryReturn();
  // const ReturnBntGroupe = useHistoryReturn();
  // const d = BtnMarkup()
  // console.log("ReturnBntGroupe :>> ", s);
  return (
    <>
      {dataMovies && (
        <>
            {/* <s /> */}
          <Ul>
            {dataMovies.map((item) => (
              <ListItem key={item.id} item={item} location={pathname} />
            ))}
          </Ul>
          <button onClick={goBack}>Go Back</button>
          <button onClick={goHome}>Home</button>
        </>
      )}
    </>
  );
};

export default memo(List);
