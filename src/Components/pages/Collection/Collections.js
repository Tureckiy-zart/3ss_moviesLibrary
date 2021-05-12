import React, { useEffect } from "react";
import { useLocation } from "react-router";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import { CollectionsForm } from "../../structure/Form/ExportsForm";
import CollectionsGallery from "./CollectionsGallery";
import ScrollUpBtn from "../../structure/Buttons/ScrollUpBtn";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import useScrollPage from "../../../Hooks/useScrollPage";
import NotFound from "../../structure/NotFound";
import MostPopular from "../MostPopular";

function Collections({ setIsLoading, state, setState, ErrorHandler, history }) {
  const { search } = useLocation(),
    searchQuery = search?.slice(1);
  const { searchCollection } = state;
  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true); //spiner on

    doFetch("getCollectionId", { searchQuery })
      .then(({ results }) => {
        setState((prev) => ({
          ...prev,
          searchCollection: results,
        }));
        setIsLoading(false);
      })
      .catch((error) => ErrorHandler(error, setState, history))
      .finally(setIsLoading(false));
  }, [searchQuery, setIsLoading, setState, history, ErrorHandler]);

  useScrollPage();

  return (
    <>
      {searchCollection === null && (
        <ComponentWrapper as="main" grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem" flexDirection="column">
            <CollectionsForm />

            <MostPopular />
          </Container>
        </ComponentWrapper>
      )}

      {searchCollection !== null && searchCollection.length > 0 && (
        <ComponentWrapper as="main" grid="grid" position="relative" top="125px">
          <Container display="flex" marginBottom="2rem" flexDirection="column">
            <CollectionsForm />

            <CollectionsGallery collections={searchCollection} />
            <ScrollUpBtn />
          </Container>
        </ComponentWrapper>
      )}

      {searchCollection !== null && searchCollection.length === 0 && (
        <NotFound>
          <CollectionsForm />
        </NotFound>
      )}
    </>
  );
}
export default withData(Collections);

// <>
//   {searchCollection.length > 0 ? (
//     <ComponentWrapper as="main" grid="grid" position="relative" top="125px">
//       <Container display="flex" marginBottom="2rem" flexDirection="column">
//         <CollectionsForm />

//         <CollectionsGallery collections={searchCollection} />
//         <ScrollUpBtn />
//       </Container>
//     </ComponentWrapper>
//   ) : (
//     <NotFound>
//       <CollectionsForm />
//     </NotFound>
//   )}
// </>
