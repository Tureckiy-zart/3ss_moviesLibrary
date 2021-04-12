import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useData } from "../Components/services/Contexts/DataContext";
// import { ReturnBntGroupe } from "../Components/structure/stylredComponents/stiledComponents";

const useHistoryReturn = () => {
  const [, setState] = useData(null);
  // const [s, Ss] = useState();
  const history = useHistory();
  const goHome = () => history.push("/");
  const goBack = () => history.goBack();
//   useEffect(() => {
//     Ss(`<button onClick=${goBack}>Go Back</button>
// <button onClick=${goHome}>Home</button>`);
//   }, []);
//kak vernut` jsx iz hook? 
  // return s;
  // <ReturnBntGroupe>
  //   <button onClick={goBack}>Go Back</button>
  //   <button onClick={goHome}>Home</button>
  // </ReturnBntGroupe>
  return [goHome, goBack];
};

export default useHistoryReturn;
