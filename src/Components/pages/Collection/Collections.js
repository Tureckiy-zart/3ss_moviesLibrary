import React, { useEffect } from "react";
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
import useScrollPage from "../../../Hooks/useScrollPage";

function Collections({ setIsLoading, state, setState, ErrorHandler, history }) {
  const { search } = useLocation(),
    searchQuery = search?.slice(1);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true); //spiner on

    doFetch("getCollectionId", { searchQuery })
      .then(({ results }) =>
        setState((prev) => ({
          ...prev,
          searchCollection: results,
          currentSearchCollection: 2,
        }))
      )
      .catch((error) => ErrorHandler(error, setState, history))
      .finally(setIsLoading(false));
  }, [searchQuery, setIsLoading, setState, history, ErrorHandler]);

  //   doFetch("getCollectionId", { searchQuery })
  //     .then(({ results }) => setCollectons(results))
  //     .catch((error) => ErrorHandler(error, setState, history))
  //     .finally(setIsLoading(false));
  // }, [searchQuery, setIsLoading, setState, history, ErrorHandler]);
  // console.log(`collections`, collections);
  useScrollPage();
  // console.log(`state`, state)
  return (
    <>
      {state.searchCollection.length > 0 ? (
        <ComponentWrapper grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem" flexDirection="column">
            <CollectionsForm />
            <CollectionsGallery collections={state.searchCollection} />
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
