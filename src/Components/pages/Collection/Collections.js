import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import { CollectionsForm } from "../../structure/Form/ExportsForm";
import CollectionsGallery from "./CollectionsGallery";
import { MovieTittle } from "../../structure/stylredComponents/Title.styled";
import MostPopular from "../MostPopular";
import ScrollUpBtn from "../../structure/Buttons/ScrollUpBtn";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";

function Collections({ setIsLoading, setState, ErrorHandler, history }) {
  const { search } = useLocation(),
    searchQuery = search?.slice(1);
  const [collections, setCollectons] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true); //spiner on

    doFetch("getCollectionId", { searchQuery })
      .then(({ results }) => setCollectons(results))
      .catch((error) => ErrorHandler(error, setState, history))
      .finally(setIsLoading(false));
  }, [searchQuery, setIsLoading, setState, history, ErrorHandler]);

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
export default withData(Collections);
