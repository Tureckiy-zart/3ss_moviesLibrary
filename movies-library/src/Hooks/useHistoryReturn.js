import { useHistory } from "react-router";
import { useData } from "../Components/services/Contexts/DataContext";

const useHistoryReturn = () => {
  const [, setState] = useData(null);

  const history = useHistory();
  const goHome = () => {
    setState((prev) => ({
      ...prev,
      canShowTrending: true,
    }));

    history.push("/");
  };
  const goBack = () => history.goBack();
  return [goHome, goBack];
};

export default useHistoryReturn;
