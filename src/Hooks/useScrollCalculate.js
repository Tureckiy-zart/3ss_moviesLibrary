import { useCallback, useEffect, useState } from "react";

export const useScrollCalculate = () => {
  const [isFetching, setisFetching] = useState(false);

  const scrollCalculate = useCallback(({ target }) => {
    //calculate distance from bottom of screen
    const distanceFromBottom =
      target.documentElement.scrollHeight -
      (target.documentElement.scrollTop + window.innerHeight);

    if (distanceFromBottom < 100) setisFetching(true); // allow to make api raquest
    if (distanceFromBottom > 100) setisFetching(false);
  }, []);

  useEffect(() => {
    //scroll listener
    document.addEventListener("scroll", scrollCalculate);
    return function () {
      document.removeEventListener("scroll", scrollCalculate);
    };
  }, [scrollCalculate]);

  return [isFetching, setisFetching];
};
