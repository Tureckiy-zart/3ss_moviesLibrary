import React, { useEffect } from "react";
import withData from "../../services/hoc/withFetch";
import { doFetch } from "../../services/API/api";

import Gallery from "../../structure/Gallery";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import useScrollPage from "../../../Hooks/useScrollPage";

function TopRaited({ setIsLoading, state, setState, ErrorHandler, history }) {
  const { topRaitred } = state;

  useEffect(() => {
    setIsLoading(true);
    doFetch("topRated")
      .then(({ results }) => {
        setState((prev) => ({
          ...prev,
          topRaitred: results,
        }));
      })
      .catch((error) => {
        ErrorHandler(error, history);
      })
      .finally(setIsLoading(false));
  }, [setState, ErrorHandler,setIsLoading, ]);

  useScrollPage();

  return (
    <>
      {topRaitred && (
        <main>
          <ComponentWrapper position="relative" top="125px">
            <Gallery dataMovies={topRaitred} />
          </ComponentWrapper>
        </main>
      )}
    </>
  );
}

export default withData(TopRaited);
