import styled from "styled-components";
import { images, randomImageIndex } from "../Baner/BanerImaes";

export const FormWrapper = styled.div`
  margin-bottom: ${({ marginBottom }) => marginBottom || "4rem"};
`;

export const BanerFormWrapper = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  top: 100px;
  width: 100%;
  background-image: url(${images[randomImageIndex]});
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  outline: none;
`;
