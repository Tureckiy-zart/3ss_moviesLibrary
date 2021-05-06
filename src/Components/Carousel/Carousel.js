import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doubleRight from "../../img/double-right-arrows-angles.svg";
import doubleLeft from "../../img/double-left-arrows-angles.svg";
import { useData } from "../services/Contexts/DataContext";
import "./Carousel.scss";
import {
  ComponentWrapper,
  Container,
} from "../structure/stylredComponents/stiledComponents";
import { nanoid } from "nanoid";
import { arrayShuffle } from "../heplers/heplers";

export default memo(() => {
  const [{ trendingMovies }] = useData(null),
    [sliderItems, setSliderItems] = useState(null);
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

  useEffect(() => {
    if (!trendingMovies.length || trendingMovies.length > 20) return;
    const items = arrayShuffle(trendingMovies.slice(0, 20)),
      shuffledItems = arrayShuffle(items);
    setSliderItems(shuffledItems);
  }, [trendingMovies]);

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
    <ComponentWrapper>
      <Container>
        {sliderItems && (
          <div className="Slider">
            {sliderItems.map(({ id, original_title, name, poster_path }) => {
              return (
                <div key={nanoid(5)} className="Slider__item">
                  <Link
                    to={{
                      pathname: `/asset/${id}`,
                      hash: `#${original_title ? original_title : name}`,
                      // state: { from: location },
                    }}
                  >
                    <img
                      alt={name}
                      className="Slider__item-img"
                      data-id={id}
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w154/${poster_path}`
                          : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
                      }
                    />
                  </Link>
                </div>
              );
            })}
            <button id="NextSlide" onClick={nextSlide}>
              <img alt="NextSlide" src={doubleLeft} />
            </button>
            <button id="PrevSlide" onClick={prevSlide}>
              <img alt="PrevSlide" src={doubleRight} />
            </button>
          </div>
        )}
      </Container>
    </ComponentWrapper>
  );
});
