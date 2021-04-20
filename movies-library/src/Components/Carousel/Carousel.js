import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import doubleRight from "../../img/double-right-arrows-angles.svg";
import doubleLeft from "../../img/double-left-arrows-angles.svg";
import { useData } from "../services/Contexts/DataContext";
import "./Carousel.scss";
import { Container } from "../structure/stylredComponents/stiledComponents";
import { nanoid } from "nanoid";

export default memo(() => {
  const [{ trendingMovies }] = useData(null),
    [items, setItems] = useState([]),
    [shownItems, setShownItems] = useState([]);
  const [trimedItem, setTrimedItem] = useState({});
  const [curentIdx, setСurentIdx] = useState(0);
  const [direction, setDirection] = useState("left");
  useEffect(() => setItems(trendingMovies.slice(0, 15)), [trendingMovies]);
  useEffect(() => setShownItems(items), [items]);

  const nextSlide = () => {
    setСurentIdx((prev) => {
      if (curentIdx === items.length) return 0;
      return prev + 1;
    });
    setDirection("left");
    setTrimedItem(shownItems.pop());
  };
  const prevSlide = () => {
    setСurentIdx((prev) => {
      if (curentIdx === items.length) return 0;
      return prev - 1;
    });
    setDirection("right");
    setTrimedItem(shownItems.shift());
  };

  useEffect(() => {
    if (!shownItems.length) return;
    if (direction === "left") setShownItems([trimedItem, ...shownItems]);
    if (direction === "right") setShownItems([...shownItems, trimedItem]);
  }, [trimedItem, direction]);

  // setInterval(nextSlide, 2000);

  return (
    <Container>
      {items && (
        <div className="Slider">
          {(shownItems.length ? shownItems : items).map(
            ({ id, original_title, name, poster_path }) => {
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
                          : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                      }
                    />
                  </Link>
                </div>
              );
            }
          )}
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