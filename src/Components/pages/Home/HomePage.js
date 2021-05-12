import withData from "../../services/hoc/withFetch";
import Gallery from "../../structure/Gallery";
import Banner from "../../structure/Baner/Banner";
import Carousel from "../../Carousel/Carousel";
import CategoryeButtons from "../Genres/GenreButtons/GenreButtons";
import { ComponentWrapper } from "../../structure/stylredComponents/stiledComponents";
import useScrollPage from "../../../Hooks/useScrollPage";

function HomePage({ state }) {
  const { trendingMovies } = state;
  useScrollPage();
  return (
    <>
      {trendingMovies && (
        <main>
          <Banner />
          <ComponentWrapper position="relative" top="650px">
            <Carousel contentArray={trendingMovies.slice(0, 20)} />
            <CategoryeButtons />
            <Gallery dataMovies={trendingMovies} />
          </ComponentWrapper>
        </main>
      )}
    </>
  );
}

export default withData(HomePage);
