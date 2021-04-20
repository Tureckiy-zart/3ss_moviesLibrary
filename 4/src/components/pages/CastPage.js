import React, { Component } from "react";

import { getMovieCast } from "../Fetch/fetchTheMovieDB";
import MoviesList from "../MoviesList/MoviesList";
import CastListItem from "../MoviesListItem/CastListItem";

class CastPage extends Component {
  state = {};

  componentDidMount() {
    this.getCurrentMovieCast();
  }

  getCurrentMovieCast = async () =>
    this.setState({ ...(await getMovieCast(this.props.match.params.movieId)) });

  render() {
    return (
      <>
        {this.state.cast && (
          <MoviesList data={this.state.cast} li={CastListItem} />
        )}
      </>
    );
  }
}

export default CastPage;
