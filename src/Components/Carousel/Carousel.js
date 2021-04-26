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
    // ;
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
    </ComponentWrapper>
  );
});









// import React, { memo, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import doubleRight from "../../img/double-right-arrows-angles.svg";
// import doubleLeft from "../../img/double-left-arrows-angles.svg";
// import { useData } from "../services/Contexts/DataContext";
// import "./Carousel.scss";
// import {
//   ComponentWrapper,
//   Container,
// } from "../structure/stylredComponents/stiledComponents";
// import { nanoid } from "nanoid";
// import { arrayShuffle } from "../heplers/heplers";

// export default memo(() => {
//   const [{ trendingMovies }] = useData(null),
//     [items, setItems] = useState([]),
//     [shownItems, setShownItems] = useState([]),
//     [trimedItem, setTrimedItem] = useState({}),
//     [curentIdx, setСurentIdx] = useState(0),
//     [direction, setDirection] = useState("left");

//   useEffect(() => {
//     const items = trendingMovies.slice(0, 20),
//       shuffledItems = arrayShuffle(items);
//     setItems(shuffledItems);
//   }, [trendingMovies]);
//   // , );
//   useEffect(() => setShownItems(items), [items]);

//   const nextSlide = () => {
//     setСurentIdx((prev) => {
//       if (curentIdx === items.length) return 0;
//       return prev + 1;
//     });
//     setDirection("left");
//     setTrimedItem(shownItems.pop());
//   };
//   const prevSlide = () => {
//     setСurentIdx((prev) => {
//       if (curentIdx === items.length) return 0;
//       return prev - 1;
//     });
//     setDirection("right");
//     setTrimedItem(shownItems.shift());
//   };

//   useEffect(() => {
//     if (!shownItems.length) return;
//     if (direction === "left") setShownItems([trimedItem, ...shownItems]);
//     if (direction === "right") setShownItems([...shownItems, trimedItem]);
//   }, [trimedItem, direction]);

//   // setInterval(async () => {
//   //   await setTrimedItem(shownItems.pop());
//   //   await setShownItems([trimedItem, ...shownItems]);
//   // }, 2000);

//   return (
//     <ComponentWrapper>
//       <Container>
//         {items && (
//           <div className="Slider">
//             {(shownItems.length ? shownItems : items).map(
//               ({ id, original_title, name, poster_path }) => {
//                 return (
//                   <div key={nanoid(5)} className="Slider__item">
//                     <Link
//                       to={{
//                         pathname: `/asset/${id}`,
//                         hash: `#${original_title ? original_title : name}`,
//                         // state: { from: location },
//                       }}
//                     >
//                       <img
//                         alt={name}
//                         className="Slider__item-img"
//                         data-id={id}
//                         src={
//                           poster_path
//                             ? `https://image.tmdb.org/t/p/w154/${poster_path}`
//                             : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
//                         }
//                       />
//                     </Link>
//                   </div>
//                 );
//               }
//             )}
//             <button id="NextSlide" onClick={nextSlide}>
//               <img alt="NextSlide" src={doubleLeft} />
//             </button>
//             <button id="PrevSlide" onClick={prevSlide}>
//               <img alt="PrevSlide" src={doubleRight} />
//             </button>
//           </div>
//         )}
//       </Container>
//     </ComponentWrapper>
//   );
// });
