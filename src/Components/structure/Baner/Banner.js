import BanerTitle from "./BanerTitle";
import SearchForm from "../Form/Form";
import { BanerWrapper } from "../stylredComponents/Baner.styled";

const Banner = () => {
  return (
    <BanerWrapper>
      <BanerTitle />
      <SearchForm queryLocation={"Movie"} />
    </BanerWrapper>
  );
};

export default Banner;
