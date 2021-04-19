import React, { useEffect } from "react";
// import popmotion from 'popmotion';
import { Container } from "../structure/stylredComponents/stiledComponents";
import "./Carousel.scss";

// const { calc, css, value } = window.popmotion;
function carousel(container) {
  const slider = container.querySelector(".slider");
  if (!slider) return;

  function getTotalItemsWidth(items) {
    const { left } = items[0].getBoundingClientRect();
    const { right } = items[items.length - 1].getBoundingClientRect();
    return right - left;
  }
  //   const { css, value } = popmotion;
  //   console.log("212 :>> ", 212);
  const items = slider.querySelectorAll(".item");
  const sliderVisibleWidth = slider.offsetWidth;
  const totalItemsWidth = getTotalItemsWidth(items);

  const maxXOffset = 0;
  const minXOffset = -(totalItemsWidth - sliderVisibleWidth);
  //   const sliderRenderer = css(slider);
  //   const sliderX = value(0, (x) => sliderRenderer.set("x", x));
}
const Carousel = () => {
  const container = document.querySelector(".container");
  useEffect(() => {
    if (!container) return;
    console.log("container :>> ", container);
    carousel(container);
  }, []);

  return (
    <div className="container">
      <ul className="slider">
        <li className="item">
          <a href="#">1</a>
        </li>
        <li className="item">
          <a href="#">2</a>
        </li>
        <li className="item">
          <a href="#">3</a>
        </li>
        <li className="item">
          <a href="#">4</a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
        <li className="item">
          <a href="#"></a>
        </li>
      </ul>
      <div className="controls">
        <button className="prev">Prev</button>
        <div className="progress-bar">asdasd</div>
        <button className="next">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
