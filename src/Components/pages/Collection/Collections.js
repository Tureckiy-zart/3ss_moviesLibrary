import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useLoader } from "../../services/Contexts/LoaderContext";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import { errorHandler } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import { CollectionsForm } from "../../structure/Form/ExportsForm";
import CollectionsGallery from "./CollectionsGallery";
import { MovieTittle } from "../../structure/stylredComponents/Title.styled";
import MostPopular from "../MostPopular";
import ScrollUpBtn from "../../structure/Buttons/ScrollUpBtn";
import { doFetch } from "../../services/API/api";

function Collections() {
  const [, setState] = useData(null);
  const { search } = useLocation();
  const [, setIsLoading] = useLoader(false);
  const history = useHistory();
  const [collections, setCollectons] = useState([]);

  const searchQuery = search?.slice(1);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true); //spiner on

    doFetch("getCollectionId", { searchQuery })
      .then(({ results }) => setCollectons(results))
      .catch((error) => errorHandler(error, setState, history))
      .finally(setIsLoading(false));
  }, [searchQuery, setIsLoading, setState, history]);

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
