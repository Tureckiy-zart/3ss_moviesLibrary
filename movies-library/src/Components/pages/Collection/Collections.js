import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useLoader } from "../../services/Contexts/LoaderContext";
import { Container } from "../../structure/stylredComponents/stiledComponents";
import { getCollectionsData } from "../../services/API/getData";
import { useData } from "../../services/Contexts/DataContext";
import CollectionsForm from "../../structure/Form/CollectionsForm";
import CollectionsGallery from "./CollectionsGallery";

function Collections() {
  const [, setState] = useData(null);

  const { search: searchQuery } = useLocation();
  const [collections, setCollectons] = useState([]);
  const [, setIsLoading] = useLoader(false);

  useEffect(
    () =>
      getCollectionsData(searchQuery, setIsLoading, setCollectons, setState),
    [searchQuery]
  );
  return (
    <Container>
      <CollectionsForm />
      <CollectionsGallery collections={collections} />
    </Container>
  );
}
export default Collections;
