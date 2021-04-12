import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieReview } from "../../services/API/api";
import ButtonsHistoryReturn from "../../structure/Buttons/ButtonsHistoryReturn";
import {
  Ul,
  Ul__item,
} from "../../structure/stylredComponents/stiledComponents";

const ReviewsPage = () => {
  let { id } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => getMovieReview(id).then((response) => setReviews(response)), [
    id,
  ]);
  return (
    <>
      ReviewsPage
      <ButtonsHistoryReturn />
      {reviews && (
        <Ul>
          {reviews.map(
            ({
              url,
              author,
              content,
              updated_at,
              author_details: { avatar_path, rating },
            }) => {
              const pathToAvatar = "/https://secure.gravatar.com/avatar",
                defaultAvatar =
                  "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg";
              let avatarPathTrimmed = `https://image.tmdb.org/t/p/w154${avatar_path}`;

              if (avatar_path === null) avatarPathTrimmed = defaultAvatar;
              if (avatar_path && avatar_path.indexOf(pathToAvatar) !== -1)
                avatarPathTrimmed = avatar_path.slice(1);
              return (
                <Ul__item>
                  <div>
                    <img
                      src={
                        avatarPathTrimmed ? avatarPathTrimmed : defaultAvatar
                      }
                      alt={author}
                      width="50"
                    />
                    <h2>
                      <a href={`https://www.themoviedb.org/u/${author}`}>
                        {author}
                      </a>
                    </h2>
                    <h5>Author rating: {rating}</h5>
                  </div>
                  <p>
                    <i>{content}</i>
                  </p>
                  <p>Date: {updated_at}</p>
                  <a href={url}>Go to review</a>
                </Ul__item>
              );
            }
          )}
        </Ul>
      )}
      <ButtonsHistoryReturn />
    </>
  );
};

export default ReviewsPage;
