import React from "react";
import styles from "./MoviesListItem.module.css";

const ReviewListItem = ({ item }) => (
  <li className={styles.ListItem}>
    <a href={item.url}>Go to review</a>
    <h2>{item.author}</h2>
    <p>{item.content}</p>
  </li>
);

export default ReviewListItem;

// {!movies ? <h2>nothing found</h2> : <MoviesList data={movies} li={MoviesListItem} />}
