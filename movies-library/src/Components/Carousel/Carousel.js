// import React, { memo, useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import doubleRight from "../../img/double-right-arrows-angles.svg";
// import doubleLeft from "../../img/double-left-arrows-angles.svg";
// import { useData } from "../services/Contexts/DataContext";
// import "./Carousel.scss";
// export default memo(() => {
//   const [{ trendingMovies }] = useData(null);
//   const { location } = useHistory();
//   const [sliderImages, setSliderImages] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     if (!trendingMovies.length) return;
//     const sliderImagesTrimmed = trendingMovies.slice(0, 8);
//     setSliderImages(trendingMovies.slice(0, 8));
//     // }, []);
//   }, [trendingMovies.length]);
//   // console.log('trendingMoviesdfsdfsdffdss :>> ', trendingMovies);

//   useEffect(() => {
//     // Запускаем интервал
//     const interval = setInterval(() => {
//       // Меняем состояние
//       setActiveIndex((current) => {
//         // Вычисляем индекс следующего слайда, который должен вывестись
//         const res = current === sliderImages.length - 1 ? 0 : current + 1;
//         // Возвращаем индекс
//         return res;
//       });
//     }, 2000);
//     // Выключаем интервал
//     return () => clearInterval();
//   }, []);

//   const prevImgIndex = activeIndex ? activeIndex - 1 : sliderImages.length - 1;
//   // Вычисляем индекс следующего слайда
//   const nextImgIndex =
//     activeIndex === sliderImages.length - 1 ? 0 : activeIndex + 1;

//   console.log("sliderImages :>> ", sliderImages);
//   console.log("prevImgIndex :>> ", prevImgIndex);
//   console.log("nextImgIndex :>> ", nextImgIndex);
//   return (
//     <>
//       {sliderImages && (
//         <div className="slider">
//           <div className="slider-img slider-img-prev" key={prevImgIndex}>
//             {/* {sliderImages[prevImgIndex]} */}
//           </div>
//           <div className="slider-img" key={activeIndex}>
//             <img
//               alt={name}
//               className="Slider__item-img"
//               data-id={id}
//               src={
//                 poster_path
//                   ? `https://image.tmdb.org/t/p/w154/${poster_path}`
//                   : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
//               }
//             />
//             {/* {sliderImages[activeIndex]} */}
//           </div>
//           <div className="slider-img slider-img-next" key={nextImgIndex}>
//             {/* {sliderImages[nextImgIndex]} */}
//           </div>
//         </div>
//       )}
//     </>
//   );
// });
