import React, { Component } from "react";
import { getMovieByID } from "../Fetch/fetchTheMovieDB";
import { Route, Switch } from "react-router-dom";
import CastPage from "./CastPage";
import ReviewsPage from "./ReviewsPage";
import SubNavigation from "../Navigation/SubNavigation";
class MovieDetailsPage extends Component {
  state = { movie: null };

  componentDidMount() {
    this.getCurrentMovie();
  }

  getCurrentMovie = async () =>
    this.setState({
      movie: await getMovieByID(this.props.match.params.movieId),
    });

  goHome = () => this.props.history.push("/");
  goBack = () => this.props.history.goBack();
  //   getCurrentMovie = async () => {
  //     const id = this.props.match.params.movieId;
  //     const movie = await getMovieByID(id);
  //     this.setState({ movie });
  //   };
  render() {
    const { movie } = this.state;
    console.log('this.props.match :>> ', this.props);
    console.log("this.props.history :>> ", this.props.history);
    console.log('this.props.match :>> ', this.props.match);

    return (
      movie && (
        <section
          style={{
            // display: "flex",
            width: 400,
            margin: 20,
            color: "#fff",
          }}
        >
          <h2>{movie.title}</h2>
          <div className="moviesList-img-wrapper">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w154/${movie.poster_path}`
                  : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
              }
              alt={movie.title ? movie.title : movie.name}
              width="250"
            />
          </div>
          <div className="movieInfo">
            <div>
              <span className="xxx">Release:</span>
              <span className="yyy">
                {movie.release_date ? movie.release_date : movie.first_air_date}
              </span>
            </div>
            <div>
              <span className="xxx">Rating IMDB:</span>
              <span className="yyy-rating"> {movie.vote_average}</span>
            </div>
            <div>
              <span className="xxx">Vote count:</span>
              <span className="yyy">{movie.vote_count}</span>
            </div>
            <p>{movie.overview}</p>
            <a href={movie.homepage}>Home Page</a>
          </div>
          <button onClick={this.goBack}>Go Back</button>
          <button onClick={this.goHome}>Home</button>

          <SubNavigation movie={movie} />
          <Switch>
            <Route path="/movies/:movieId/cast" component={CastPage} />
            <Route path="/movies/:movieId/reviews" component={ReviewsPage} />
          </Switch>
        </section>
      )
    );
  }
}

export default MovieDetailsPage;
