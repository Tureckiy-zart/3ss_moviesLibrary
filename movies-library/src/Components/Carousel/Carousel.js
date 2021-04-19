import React, { memo, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import doubleRight from "../../img/double-right-arrows-angles.svg";
import doubleLeft from "../../img/double-left-arrows-angles.svg";
import { useData } from "../services/Contexts/DataContext";
import "./Carousel.scss";
import { Container } from "../structure/stylredComponents/stiledComponents";
export default memo(() => {
  // let arr = [1, 2, 3, 4, 4, 5];
  const [{ trendingMovies }] = useData(null);
  const [x, setX] = useState(null);
  // const { location } = useHistory();
  const nextSlide = () => {
      x === 0 ? setX(-100 * (trendingMovies.length - 1)) : setX(x + 100);
    },
    prevSlide = () => {
      x === -100 * (trendingMovies.length - 1) ? setX(0) : setX(x - 100);
    };
  // setInterval(nextSlide, 2000);

  // function getTotalItemsWidth(items) {
  //   const { left } = items[0].getBoundingClientRect();
  //   const { right } = items[items.length - 1].getBoundingClientRect();
  //   return right - left;
  // }
  useEffect(() => {
    console.log("x :>> ", x);
    const slider = document.querySelector(".Slider");
    if (!slider) return;
    const sliderVisibleWidth = slider.offsetWidth;
    console.log("sliderVisibleWidth :>> ", sliderVisibleWidth);
    const items = document.querySelectorAll(".Slider__item");
    // console.log("sliderVisibleWidth :>> ", sliderVisibleWidth);
    // console.log("items :>> ", items);
    // const sliderVisibleWidth = slider.offsetWidth;
    // // const totalItemsWidth = getTotalItemsWidth(items);

    // console.log("items :>> ", items[0].offsetWidth);
    const imgWidth = Math.ceil(100 / items.length);
    console.log("imgWidth :>> ", imgWidth);
    // const sliderWidth = items.length * 100;
    // console.log("sliderWidth :>> ", sliderWidth);
    // console.log("sliderWidth :>> ", sliderWidth);
    // slider.style.width = sliderWidth + "%";
    // console.log("object :>> ", imgWidth);
  }, []);
  return (
    <Container>
      {trendingMovies && (
        <div className="Slider">
          {trendingMovies
            .slice(0, 15)
            .map(({ id, original_title, name, poster_path }) => {
              return (
                <div
                  key={id}
                  className="Slider__item"
                  style={{ transform: `translate(${x}%)` }}
                >
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
                          : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
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
  );
});
