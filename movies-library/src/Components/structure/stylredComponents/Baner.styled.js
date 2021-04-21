import styled from "styled-components";
import { images, randomImageIndex } from "../Baner/BanerImaes";
export const BanerWrapper = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 100px;
  /* width: 1400px; */
  width: 100%;
  height: calc(100vh - 100px);
  /* height:650px; */
  background-image: url(${images[randomImageIndex]});
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  outline: none;
  /* left: 50%;
  transform: translateX(-50%); */
`;
