import React, { memo, useEffect, useState } from "react";
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
import { useData } from "../../services/Contexts/DataContext";
import InfoBlock from "./InfoBlock";
import ImageBlock from "./ImageBlock";

const MovieDetailsPage = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [, setState] = useData(null);
  const history = useHistory();
  const [, setIsLoading] = useLoader();

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);

    doFetch("getMovieByID", { id })
      .then((response) => setMovieDetails(response))
      .catch((error) => ErrorHandler(error, history))
      .finally(setIsLoading(false));
  }, [id, setIsLoading, setState, history]);

  return (
    <>
      {movieDetails && (
        <ComponentWrapper position="relative" top="125px">
          <Container>
            <ButtonsHistoryReturn />
            <StyledDiv>
              <ImageBlock {...movieDetails} />
              <InfoBlock {...movieDetails} />
            </StyledDiv>
          </Container>
        </ComponentWrapper>
      )}
    </>
  );
};

export default memo(MovieDetailsPage);
