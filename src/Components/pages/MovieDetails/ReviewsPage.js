import React, { useEffect, useState } from "react";
import {  useParams } from "react-router";
import { getAvatar, getDate } from "../../heplers/heplers";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  InfoWrapper,
  Avatar,
  StyledList,
} from "../../structure/stylredComponents/List.styled";
import {
  ComponentWrapper,
  Container,
  ExternalLink,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
  SenondaryText,
} from "../../structure/stylredComponents/Title.styled";

const ReviewsPage = ({ setIsLoading, setState, ErrorHandler, history }) => {
  let { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!id) return;
    setIsLoading(true); //spiner on

    doFetch("getReview", { id })
      .then(({ results }) => setReviews(results))
      .catch((error) => ErrorHandler(error, setState, history))
      .finally(setIsLoading(false));
  }, [id, setIsLoading, setState, history, ErrorHandler]);

  return (
    <ComponentWrapper position="relative" top="125px">
      <Container>
        <ButtonsHistoryReturn />

        {reviews.length > 0 ? (
          <StyledList>
            {reviews.map(
              ({
                id,
                url,
                author,
                content,
                updated_at,
                author_details: { avatar_path, rating },
              }) => {
                const date = getDate(updated_at.slice(0, 10));
                const avatarImg = getAvatar(avatar_path);
                return (
                  <InfoWrapper key={id} padding="1rem" display="grid">
                    <InfoWrapper padding="1rem">
                      <ExternalLink
                        href={`https://www.themoviedb.org/u/${author}`}
                      >
                        <Avatar src={avatarImg} alt={author} />
                        <MovieTittle>{author}</MovieTittle>
                      </ExternalLink>
                      <SenondaryText>Author rating: {rating}</SenondaryText>
                    </InfoWrapper>
                    <InfoWrapper padding="1rem">
                      <AdditionText>
                        <i>{content}</i>
                      </AdditionText>
                      <SenondaryText>Date: {date}</SenondaryText>
                      <ExternalLink href={url}>Go to review</ExternalLink>
                    </InfoWrapper>
                  </InfoWrapper>
                );
              }
            )}
          </StyledList>
        ) : (
          <MovieTittle marginBottom="2rem">No review yet</MovieTittle>
        )}
      </Container>
    </ComponentWrapper>
  );
};

export default withData(ReviewsPage);