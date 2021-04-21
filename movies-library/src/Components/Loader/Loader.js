import React from "react";
import Spiner from "react-loader-spinner";
import styled from "styled-components";
import useScrollDisable from "../../Hooks/useScrollDisable";
import { scrollFunction } from "../heplers/heplers";
import { useLoader } from "../services/Contexts/LoaderContext";
const LoaderWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  z-index: 100;
`;

function Loader() {
  const [isLoading] = useLoader();
  // const [disableScroll, enableScroll] = scrollFunction();

  // useScrollDisable();
  if (!isLoading) return null;
  // enableScroll();
  return (
    <LoaderWrapper>
      <Spiner
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={400} //3 secs
      />
    </LoaderWrapper>
  );
}

export default Loader;
