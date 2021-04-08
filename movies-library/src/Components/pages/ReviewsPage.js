import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useHistoryReturn from "../../Hooks/useHistoryReturn";
import { getMovieReview } from "../services/API/api";

const ReviewsPage = () => {
  let { id } = useParams();
  const [goHome, goBack] = useHistoryReturn();
  const [reviews, setReviews] = useState(null);
  useEffect(
    () => getMovieReview(id).then((response) => setReviews(response)),
    [id]
  );
  return (
    <>
      ReviewsPage
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Home</button>
      {reviews && (
        <ul>
          {reviews.map(
            ({
              url,
              author,
              content,
              updated_at,
              author_details: { avatar_path, rating },
            }) => {
              const pathToAvatar = "/https://secure.gravatar.com/avatar";
              let avatarPathTrimmed = `https://image.tmdb.org/t/p/w154${avatar_path}`;
              if (avatar_path.indexOf(pathToAvatar) !== -1)
                avatarPathTrimmed = avatar_path.slice(1);

              return (
                <li>
                  <div>
                    <div>
                      <img
                        src={
                          avatarPathTrimmed
                            ? avatarPathTrimmed
                            : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                        }
                        alt={author}
                        width="50"
                      />
                      <h2>
                        <a href={`https://www.themoviedb.org/u/${author}`}>
                          {author}
                        </a>
                      </h2>
                    </div>
                    <h5>Author rating:{rating}</h5>
                  </div>
                  <p>
                    <i>{content}</i>
                  </p>
                  <p>Date: {updated_at}</p>
                  <a href={url}>Go to review</a>
                </li>
              );
            }
          )}
        </ul>
      )}
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Home</button>
    </>
  );
};

export default ReviewsPage;
