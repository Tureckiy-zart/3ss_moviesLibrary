import { useRouteMatch } from "react-router";
import { useData } from "../Components/services/Contexts/DataContext";

const useCurrentPage = () => {
  const { path } = useRouteMatch();
  const [
    {
      currentCategoryePage,
      currentSearchMoviePage,
      currentHomePage,
    },
  ] = useData(); //global state
  function getCurrnetPage() {
    switch (path) {
      case "/categoryes":
        return currentCategoryePage;
      case "/searchMovie":
        return currentSearchMoviePage;
      default:
        return currentHomePage;
    }
  }
  const currnetPage = getCurrnetPage();
  return currnetPage;
};

export default useCurrentPage;
