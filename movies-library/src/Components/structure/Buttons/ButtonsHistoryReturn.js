import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useData } from "../../services/Contexts/DataContext";
import { ReturnBntGroupe } from "../stylredComponents/stiledComponents";
// import { ReturnBntGroupe } from "../Components/structure/stylredComponents/stiledComponents";

const ButtonsHistoryReturn = () => {
  const history = useHistory();
  const goHome = () => history.push("/");
  const goBack = () => history.goBack();
  return (
    <ReturnBntGroupe>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Home</button>
    </ReturnBntGroupe>
  );
  // return [goHome, goBack];
};

export default ButtonsHistoryReturn;
