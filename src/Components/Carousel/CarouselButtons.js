import doubleRight from "../../img/double-right-arrows-angles.svg";
import doubleLeft from "../../img/double-left-arrows-angles.svg";
const CarouselButtons = ({ nextSlide, prevSlide }) => {
  return (
    <>
      <button id="NextSlide" onClick={nextSlide}>
        <img alt="NextSlide" src={doubleLeft} />
      </button>
      <button id="PrevSlide" onClick={prevSlide}>
        <img alt="PrevSlide" src={doubleRight} />
      </button>
    </>
  );
};

export default CarouselButtons;
