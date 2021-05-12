import React from "react";
import Spiner from "react-loader-spinner";
import { useLoader } from "../services/Contexts/LoaderContext";
import { LoaderWrapper } from "../structure/stylredComponents/stiledComponents";


function Loader() {
  const [isLoading] = useLoader();
  if (!isLoading) return null;
  return (
    <LoaderWrapper>
      <Spiner
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={800}
      />
    </LoaderWrapper>
  );
}

export default Loader;
