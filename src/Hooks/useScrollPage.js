import { useEffect } from "react";
import { doFetch } from "../Components/services/API/api";
import { ErrorHandler } from "../Components/services/API/getData";
import { useData } from "../Components/services/Contexts/DataContext";
import { useLoader } from "../Components/services/Contexts/LoaderContext";
import { useCurrentPageOptions } from "./useCurrentPageOptions";
import { useScrollCalculate } from "./useScrollCalculate";


const useScrollPage = () => {
  const [isFetching, setisFetching] = useScrollCalculate(),
    [, setIsLoading] = useLoader(false),
    [state, setState] = useData();
  const apiRequestOptions = useCurrentPageOptions();

  const getDataOnLoad = async (apiRequestOptions) => {
    setIsLoading(true); //Spiner on
    if (
      !state[apiRequestOptions.moviesCategory] ||
      state[apiRequestOptions.moviesCategory].length === 0
    )
      return;
    try {
      const { results } = await doFetch(null, apiRequestOptions);
      const { moviesCategory, currnentPage } = apiRequestOptions;

      setState((prev) => {
        return {
          ...prev,
          [moviesCategory]: [...prev[moviesCategory], ...results],
          [currnentPage]: prev[currnentPage] + 1,
        };
      });
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false); //spiner off
      setisFetching(false);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isFetching) return;
    getDataOnLoad(apiRequestOptions);
  }, [isFetching]);
  /* eslint-enable react-hooks/exhaustive-deps */
};
export default useScrollPage;
