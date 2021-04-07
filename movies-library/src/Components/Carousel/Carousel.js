import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doubleRight from "../../img/double-right-arrows-angles.svg";
import doubleLeft from "../../img/double-left-arrows-angles.svg";
import { useData } from "../services/Contexts/DataContext";
import "./Carousel.scss";
export default memo(() => {
  let arr = [1, 2, 3, 4, 4, 5];
  const [{ trendingMovies }, setState] = useData(null);
  const [caruselState, setCaruselState] = useState(null);
  const [x, setX] = useState(null);
  useEffect(() => {
    // if (!trendingMovies.length) return;
    setCaruselState(trendingMovies.splice(0, 8));
    // setCaruselState(trendingMovies);
    // arr = trendingMovies.length-1;
  }, []);
  let currentItem = null;
  const nextSlide = () => {
      // setX(x+100)
      x === 0 ? setX(-100 * (caruselState.length - 1)) : setX(x + 100);
    },
    prevSlide = () => {
      x === -100 * (caruselState.length - 1) ? setX(0) : setX(x - 100);
    };
  // setInterval(nextSlide, 2000);

  // const slider = document.querySelector(".Slider"),
  //   allImages = document.querySelectorAll(".Slide"),
  //   imgWidth = Math.ceil(100 / allImages.length),
  //   sliderWidth = allImages.length * 100;
  // console.log("sliderWidth :>> ", sliderWidth);
  // // slider.style.width = sliderWidth + "%";

  return (
    <>
      {caruselState && (
        <div className="Slider">
          {caruselState.map(({ id, original_title, name, poster_path }) => {
            return (
              <div
                key={id}
                className="Slider__item"
                style={{ transform: `translate(${x}%)` }}
                // style={{ transform: `translate(${x}%)`, }}
                // style={{ width: `(${x}%)` }}
              >
                <Link
                  to={{
                    pathname: `/asset/${id}`,
                    // search: "?category=adventure",
                    hash: `#${original_title ? original_title : name}`,
                    // state: { from: location },
                  }}
                >
                  <img
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
            <img src={doubleLeft} />
          </button>
          <button id="PrevSlide" onClick={prevSlide}>
            <img src={doubleRight} />
          </button>
        </div>
      )}
    </>
  );
});
