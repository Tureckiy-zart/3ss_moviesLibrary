import { memo, useEffect, useState } from "react";
import _ from "lodash";

import "./Carousel.scss";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { arrayShuffle } from "../heplers/heplers";
import HomeCarouselMarkup from "./HomeCarouselMarkup";
import CarouselButtons from "./CarouselButtons";

const Carousel = ({ contentArray }) => {
  const [sliderItems, setSliderItems] = useState(null);

  useEffect(() => {
    if (!contentArray.length) return;
    const items = contentArray.slice(0, 20),
      shuffledItems = arrayShuffle(items);
    setSliderItems(shuffledItems);
  }, [contentArray]);

  const index = (func) => {
    let count = 0;
    if (count === sliderItems.length) count = 0;
    if (func === "increment") count += 1;
    if (func === "decrement") count -= 1;
  };

  const nextSlide = () => {
      index("increment");
      setSliderItems([..._.tail(sliderItems), _.head(sliderItems)]);
    },
    prevSlide = () => {
      index("decrement");
      setSliderItems([_.last(sliderItems), ..._.initial(sliderItems)]);
    };

  return (
    <>
      {sliderItems && (
        <ComponentWrapper>
          <Container>
            <div className="Slider">
              <HomeCarouselMarkup sliderItems={sliderItems} />
              <CarouselButtons nextSlide={nextSlide} prevSlide={prevSlide} />
            </div>
          </Container>
        </ComponentWrapper>
      )}
    </>
  );
};
export default memo(Carousel);
