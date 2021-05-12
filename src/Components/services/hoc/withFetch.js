import React from "react";
import { useHistory } from "react-router";
import { ErrorHandler } from "../API/getData";
import { useData } from "../Contexts/DataContext";
import { useLoader } from "../Contexts/LoaderContext";

const withData = (WrappedComponent) => {
  return (props) => {
    const history = useHistory();
    const [state, setState] = useData();
    const [, setIsLoading] = useLoader();

    return (
      <WrappedComponent
        {...props}
        history={history}
        state={state}
        setState={setState}
        setIsLoading={setIsLoading}
        ErrorHandler={ErrorHandler}
        // extraProp="This prop is from HOC"
      />
    );
  };
};

export default withData;
