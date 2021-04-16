import React from "react";
import Spiner from "react-loader-spinner";
import { useLoader } from "../services/Contexts/LoaderContext";

function Loader() {
  const [isLoading] = useLoader();
  if (!isLoading) return null;
  return (
    <Spiner
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      //   timeout={3000} //3 secs
    />
  );
}

export default Loader;