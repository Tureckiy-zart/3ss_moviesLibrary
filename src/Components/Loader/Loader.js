import React from "react";
import Spiner from "react-loader-spinner";
import styled from "styled-components";
import { useLoader } from "../services/Contexts/LoaderContext";

const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  z-index: 10000000;
`;

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
        // timeout={400}
      />
    </LoaderWrapper>
  );
}

export default Loader;
