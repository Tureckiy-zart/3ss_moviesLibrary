import { memo, useEffect, useState } from "react";
import doubleRight from "../../img/double-right-arrows-angles.svg";
import doubleLeft from "../../img/double-left-arrows-angles.svg";
import "./Carousel.scss";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { arrayShuffle } from "../heplers/heplers";
import HomeCarouselMarkup from "./HomeCarouselMarkup";

const Carousel = ({ contentArray, page }) => {
  const [sliderItems, setSliderItems] = useState(null);
  useEffect(() => {
    if (!contentArray.length) return;
    const items = arrayShuffle(contentArray.slice(0, 20)),
      shuffledItems = arrayShuffle(items);
    setSliderItems(shuffledItems);
  }, [contentArray]);

  const index = (func) => {
      let count = 0;
      if (count === sliderItems.length) count = 0;
      if (func === "add") count += 1;
      if (func === "subtract") count -= 1;
    },
    getTrimedItem = (func) => {
      if (func === "add") return sliderItems.shift();
      if (func === "subtract") return sliderItems.pop();
    };

  const nextSlide = () => {
    index("add");
    const trimedItem = getTrimedItem("add");
    setSliderItems([...sliderItems, trimedItem]);
  };
  const prevSlide = () => {
    index("subtract");
    const trimedItem = getTrimedItem("subtract");
    setSliderItems([trimedItem, ...sliderItems]);
  };
  return (
    <>
      {sliderItems && (
        <ComponentWrapper>
          <Container>
            <div className="Slider">
              {page === "home" && (
                <HomeCarouselMarkup sliderItems={sliderItems} />
              )}
              <button id="NextSlide" onClick={nextSlide}>
                <img alt="NextSlide" src={doubleLeft} />
              </button>
              <button id="PrevSlide" onClick={prevSlide}>
                <img alt="PrevSlide" src={doubleRight} />
              </button>
            </div>
          </Container>
        </ComponentWrapper>
      )}
    </>
  );
};
export default memo(Carousel);
