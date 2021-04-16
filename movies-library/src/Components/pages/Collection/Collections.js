import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getCollectionId } from "../../services/API/api";
import { useData } from "../../services/Contexts/DataContext";
import { useLoader } from "../../services/Contexts/LoaderContext";
import { StyledGalleryList } from "../../structure/stylredComponents/LIst/List.styled";
import {
  ComponentWrapper,
  Container,
} from "../../structure/stylredComponents/stiledComponents";
import CollectionsList from "./CollectionsList";
import SearchForm, { FormWrapper } from "../../structure/Form/Form";

function Collections() {
  const { search: searchQuery } = useLocation();
  const [collectons, setCollectons] = useState(null);
  const [, setIsLoading] = useLoader(false);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoading(true); //spiner on
    getCollectionId({ searchQuery }) //get collections {id, name}
      .then((response) => {
        setCollectons(response); //set local stse collections {id, name}
        setIsLoading(false); //spiner off
        // setState((prev) => ({
        //   ...prev,
        //   currentCollectons: 2,
        //   // currentSection: `${path}`,
        // }));
      });
    // .catch((error) => {
    //   setState((prev) => ({
    //     ...prev,
    //     error: error.response.data,
    //   }));
    //   setIsLoading(false); //spiner off

    //   throw new Error(error.response.data);
    // });
  }, [searchQuery]);
  return (
    <Container>
      <ComponentWrapper marginTop="50px">
        <FormWrapper width='32rem'>
          <SearchForm queryLocation={"Collection"} />
        </FormWrapper>
      </ComponentWrapper>

      <StyledGalleryList>
        {collectons && (
          <>
            {collectons.map((item) => (
              <CollectionsList item={item} />
            ))}
          </>
        )}
      </StyledGalleryList>
    </Container>
  );
}
export default Collections;
