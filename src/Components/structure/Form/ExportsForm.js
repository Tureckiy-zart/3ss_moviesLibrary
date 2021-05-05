import { FormWrapper } from "../stylredComponents/Baner.styled";
import SearchForm from "./Form";

export const CollectionsForm = () => (
  <FormWrapper marginBottom="2rem">
    <SearchForm queryLocation={"Collection"} />
  </FormWrapper>
);

export const BannerForm = () => (
  <FormWrapper>
    <SearchForm queryLocation={"Movie"} />
  </FormWrapper>
);
