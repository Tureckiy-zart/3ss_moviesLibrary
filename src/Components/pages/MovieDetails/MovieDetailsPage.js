import { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  ComponentWrapper,
  Container,
  StyledDiv,
} from "../../structure/stylredComponents/stiledComponents";
import { ErrorHandler } from "../../services/API/getData";
import { useLoader } from "../../services/Contexts/LoaderContext";
import { doFetch } from "../../services/API/api";
import InfoBlock from "./InfoBlock";
import ImageBlock from "./ImageBlock";
import Carousel from "../../Carousel/Carousel";

const MovieDetailsPage = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const history = useHistory();
  const [, setIsLoading] = useLoader();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    Promise.all([
      doFetch("getMovieByID", { id: Number(id) }),
      doFetch("getVideo", { id: Number(id) }),
      doFetch("getSimilar", { id: Number(id) }),
    ])
      .then((response) => {
        setMovieDetails({
          ...response[0],
          trailers: response[1].results,
          similarMovies: response[2].results,
        });
      })
      .catch((error) => ErrorHandler(error, history))
      .finally(setIsLoading(false));
  }, [id, setIsLoading, history]);
  return (
    <>
      {movieDetails && (
        <main>
          <ComponentWrapper position="relative" top="125px">
            <Container>
              <ButtonsHistoryReturn />
              <StyledDiv>
                <ImageBlock {...movieDetails} />
                <InfoBlock {...movieDetails} />
              </StyledDiv>
              <div>
<p>Similar Movies</p>
              <Carousel contentArray={movieDetails.similarMovies} page="home" />
              </div>
            </Container>
          </ComponentWrapper>
        </main>
      )}
    </>
  );
};

export default memo(MovieDetailsPage);
