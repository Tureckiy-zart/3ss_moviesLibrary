import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAvatar, getDate } from "../../heplers/heplers";
import { getMovieReview } from "../../services/API/api";
import ButtonsHistoryReturn from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  InfoWrapper, Avatar,
  StyledList,
} from "../../structure/stylredComponents/LIst/List.styled";
import {
  Container,
  ExternalLink,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
  SenondaryText,
} from "../../structure/stylredComponents/Title/Title";

const ReviewsPage = () => {
  let { id } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => getMovieReview(id).then((response) => setReviews(response)), [
    id,
  ]);
  return (
    <Container>
      <MovieTittle>ReviewsPage</MovieTittle>
      <ButtonsHistoryReturn />
      {reviews && (
        <StyledList>
          {reviews.map(
            ({
              url,
              author,
              content,
              updated_at,
              author_details: { avatar_path, rating },
            }) => {
              const date = getDate(updated_at.slice(0, 10));
              const avatarImg = getAvatar(avatar_path);
              return (
                  <InfoWrapper padding="1rem" display="grid">
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
      )}
      <ButtonsHistoryReturn />
    </Container>
  );
};

export default ReviewsPage;
