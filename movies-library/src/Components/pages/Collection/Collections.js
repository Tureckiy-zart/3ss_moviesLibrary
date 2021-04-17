import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useLoader } from "../../services/Contexts/LoaderContext";
import { StyledGalleryList } from "../../structure/stylredComponents/List.styled";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import CollectionsList from "./CollectionsList";
import SearchForm, { FormWrapper } from "../../structure/Form/Form";
import { getCollectionsData } from "../../services/API/getData";
import { MovieTittle } from "../../structure/stylredComponents/Title.styled";
import { useData } from "../../services/Contexts/DataContext";
import Gallery from "../../structure/Gallery";

function Collections() {
  const [, setState] = useData(null);

  const { search: searchQuery } = useLocation();
  const [collections, setCollectons] = useState([]);
  const [, setIsLoading] = useLoader(false);
  const [{ trendingMovies }] = useData(null); //Global state

  useEffect(
    () =>
      getCollectionsData(searchQuery, setIsLoading, setCollectons, setState),
    [searchQuery]
  );
  return (
    <Container>
      <ComponentWrapper marginTop="4rem">
        <FormWrapper width="32rem">
          <SearchForm queryLocation={"Collection"} />
        </FormWrapper>
      </ComponentWrapper>

      {collections.length > 0 ? (
        <StyledGalleryList>
          {collections.map((item) => (
            <CollectionsList item={item} />
          ))}
        </StyledGalleryList>
      ) : (
        <>
          <MovieTittle marginBottom="2rem">Most popular: </MovieTittle>
          {trendingMovies.length > 0 && (
            <Gallery dataMovies={trendingMovies.slice(0, 5)} />
          )}
        </>
      )}
    </Container>
  );
}
export default Collections;
