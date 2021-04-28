import React, { Component } from "react";
import { useHistory } from "react-router";
import { errorHandler } from "../API/getData";
import { useData } from "../Contexts/DataContext";
import { useLoader } from "../Contexts/LoaderContext";

const withData = (WrappedComponent) => {
  //   return class WithHigherOrderComponent extends Component {

  //     render() {
  //       return (
  //         <WrappedComponent {...this.props} extraProp="This prop is from HOC" />
  //       );
  //     }
  //   };

  const WithHigherOrderComponent = (props) => {
    const history = useHistory();
    const [, setState] = useData();
    const [, setIsLoading] = useLoader();

    return (
      <WrappedComponent
        {...props}
        history={history}
        setState={setState}
        setIsLoading={setIsLoading}
        errorHandler={errorHandler}
        // extraProp="This prop is from HOC"
      />
    );
  };

  return WithHigherOrderComponent;
};

export default withData;
