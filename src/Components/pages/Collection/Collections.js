import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useLoader } from "../../services/Contexts/LoaderContext";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import { getCollectionsData } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import CollectionsForm from "../../structure/Form/CollectionsForm";
import CollectionsGallery from "./CollectionsGallery";
import { MovieTittle } from "../../structure/stylredComponents/Title.styled";
import MostPopular from "../MostPopular";
import ScrollUpBtn from "../../structure/Buttons/ScrollUpBtn";

function Collections() {
  const [, setState] = useData(null);
  const { search: searchQuery } = useLocation();
  const [collections, setCollectons] = useState([]);
  const [, setIsLoading] = useLoader(false);

  useEffect(
    () => {
      getCollectionsData(searchQuery, setIsLoading, setCollectons, setState);
    },
    [searchQuery, setIsLoading, setState]
    // [options]
  );
  return (
    <>
      {collections.length > 0 ? (
        <ComponentWrapper grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem" flexDirection="column">
            <CollectionsForm />
            <CollectionsGallery collections={collections} />
            <ScrollUpBtn />
          </Container>
        </ComponentWrapper>
      ) : (
        <ComponentWrapper grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem" flexDirection="column">
            <CollectionsForm />
            <MovieTittle margin="2rem">Nothing found.</MovieTittle>
          </Container>

          <MostPopular />
        </ComponentWrapper>
      )}
    </>
  );
}
export default Collections;
