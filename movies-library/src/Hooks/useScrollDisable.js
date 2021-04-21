import { useEffect } from "react";
import { scrollFunction } from "../Components/heplers/heplers";
import { useLoader } from "../Components/services/Contexts/LoaderContext";

const useScrollDisable = () => {
  const [isLoading] = useLoader();
  const [disableScroll, enableScroll] = scrollFunction();
  useEffect(() => {
    if (isLoading) disableScroll();
    if (isLoading=== false) enableScroll();
  }, [isLoading]);
};
export default useScrollDisable;
