import BanerTitle from "./BanerTitle";
import { BanerFormWrapper } from "../stylredComponents/Baner.styled";
import { BannerForm } from "../Form/ExportsForm";

const Banner = () => {
  return (
    <BanerFormWrapper>
      <BanerTitle />
      <BannerForm />
    </BanerFormWrapper>
  );
};

export default Banner;
