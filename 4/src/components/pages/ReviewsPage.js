import React, { Component } from "react";
import { getMovieReview } from "../Fetch/fetchTheMovieDB";
import ReviewListItem from "../MoviesListItem/ReviewListItem";
import MoviesList from "../MoviesList/MoviesList";
class ReviewsPage extends Component {
  state = {};
  componentDidMount() {
    this.getCurrentMovieReview();
  }
  getCurrentMovieReview = async () =>
    this.setState({
      ...(await getMovieReview(this.props.match.params.movieId)),
    });
  render() {
    return (
      <>
        {this.state.results && (
          <MoviesList data={this.state.results} li={ReviewListItem} />
        )}
      </>
    );
  }
}

export default ReviewsPage;
