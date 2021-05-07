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

    // <ul>
    //   {sliderItems.map((trailer) => {
    //     console.log(`trailer`, sliderItems);
    //     return (
    //       <li key={trailer.key}>
    //         <p>{trailer.name}</p>
    //         <VideoConmonent
    //           id="player"
    //           type="text/html"
    //           src={`https://www.youtube.com/embed/${trailer.key}`}
    //           frameBorder="0"
    //           allowFullScreen
    //         />
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};

// const Video = ({trailers}) => {
//   console.log(`movieId`, trailers);
//   //   const [trailers, setTrailers] = useState(null);
//   //   const history = useHistory();
//   //   useEffect(() => {
//   //     // if (!trailers) return;
//   //     console.log(`22`, 22);
//   //     doFetch("getVideo", { id: Number(movieId) })
//   //       .then(({ results }) => setTrailers(results))
//   //       .catch((error) => ErrorHandler(error, history));
//   //   }, []);

//   //   console.log(`trailers`, trailers);

//   return (
//     <>
//       {trailers && <Carousel contentArray={trailers} page={"movieDetails"} />}
//       {/* {trailers && <Carousel contentArray={trailers} page={"movieDetails"} />} */}
//     </>
//   );
//   //   return <>{trailers && <Mk trailers={trailers} />}</>;
// };

// export default (Video);
