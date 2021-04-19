import React from "react";
import {
  ComponentWrapper,
  Container,
} from "../stylredComponents/stiledComponents";
import SearchForm, { FormWrapper } from "./Form";

function CollectionsForm() {
  return (
    <Container>
      <ComponentWrapper marginTop="4rem">
        <FormWrapper width="32rem">
          <SearchForm queryLocation={"Collection"} />
        </FormWrapper>
      </ComponentWrapper>
    </Container>
  );
}
export default CollectionsForm;
