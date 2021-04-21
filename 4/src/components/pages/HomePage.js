import React, { Component } from "react";
import { getTrendingMovies } from "../Fetch/fetchTheMovieDB";
import MoviesList from "../MoviesList/MoviesList";
import MoviesListItem from "../MoviesListItem/MoviesListItem";
import styles from "./Pages.module.css";

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
    error: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.fetcher();
  }

  fetcher = async () => {
    try {
      const result = await getTrendingMovies();
      this.setState((prev) => ({ movies: [...prev.movies, ...result] }));
      return result;
    } catch (error) {
      this.setState({ error });
      console.log("ERROR", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { movies } = this.state;
    return (
      <div >
      {/* <div styles={styles.mainState}> */}
        {movies && (
          <>
            <h2 className="trending-title">Trending today</h2>
            <MoviesList data={movies} li={MoviesListItem} />
          </>
        )}
      </div>
    );
  }
}

export default HomePage;
