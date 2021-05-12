import { Link } from "react-router-dom";

const HomeCarouselMarkup = ({ sliderItems }) => {
  return (
    <>
      {sliderItems && (
        <div className="Slider">
          {sliderItems.map(({ id, original_title, name, poster_path }) => (
            <div key={id} className="Slider__item">
              <Link
                to={{
                  pathname: `/asset/${id}`,
                  hash: `#${original_title ? original_title : name}`,
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
          ))}
        </div>
      )}
    </>
  );
};

export default HomeCarouselMarkup;
