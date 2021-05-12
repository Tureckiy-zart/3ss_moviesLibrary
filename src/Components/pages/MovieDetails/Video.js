import { useState } from "react";
import styled from "styled-components";
import {
  StyledGalleryList,
  StyledList,
} from "../../structure/stylredComponents/List.styled";
import { AdditionText } from "../../structure/stylredComponents/Title.styled";
import { BasicButton } from "../../structure/stylredComponents/Button.styled";

const VideoConmonent = styled.iframe`
  display: block;
  width: 640px;
  /* width: 460px; */
  height: 480px;
  /* height: 240px;  */
  margin-bottom: 1rem;
`;

export const MovieDetailsTrailers = ({ trailers = {} }) => {
  const [currentTrailer, setCurrentTrailer] = useState(trailers[0]);

  const handleClick = (id) => {
    const currentTrailer = trailers.find((trailer) => trailer.id === id);
    setCurrentTrailer(currentTrailer);
  };

  return (
    trailers.length && (
      <StyledGalleryList as="div" gridTemplatCcolumns="1fr">
        <AdditionText marginBottom='0'>{currentTrailer.name}</AdditionText>
        <VideoConmonent
          id="player"
          type="text/html"
          src={`https://www.youtube.com/embed/${currentTrailer.key}`}
          frameBorder="0"
          allowFullScreen
        />

        <StyledList justifyContent="center">
          {trailers.slice(0,5).map(
            (trailer) =>
              currentTrailer.id !== trailer.id && (
                <BasicButton
                  onClick={() => handleClick(trailer.id)}
                  margin="0 0.5rem 0.5rem 0"
                >
                  {trailer.name}
                </BasicButton>
              )
          )}
        </StyledList>
      </StyledGalleryList>
    )
  );
};
