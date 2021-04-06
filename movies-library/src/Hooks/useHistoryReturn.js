import { useHistory } from "react-router";

const useHistoryReturn = () => {
  const history = useHistory();
  const goHome = () => history.push("/");
  const goBack = () => history.goBack();

  return [goHome, goBack];
};

export default useHistoryReturn;
