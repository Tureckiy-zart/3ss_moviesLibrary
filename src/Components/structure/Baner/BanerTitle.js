import React from "react";
import { BasicTittle,  TitileWrapper } from "../stylredComponents/Title.styled";

const BanerTitle = () => (
  <TitileWrapper>
    <BasicTittle as='h1' fontSize={'8rem'} color={'#fff'}>Welcome.</BasicTittle>
    <BasicTittle color={'#fff'}>Millions of movies. Explore now.</BasicTittle>
  </TitileWrapper>
);

export default BanerTitle;
