import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import Form from "./Form";
import { getMovieByTitle } from "../Fetch/fetchTheMovieDB";
import MoviesListItem from "../MoviesListItem/MoviesListItem";
class SearchForm extends Component {
  state = {
    query: "terminator",
    movies: null,
    isLoading: false,
    error: null,
  };
  componentDidMount() {
    const { location } = this.props.history;

    // this.setState({ isLoading: true });
    // this.fetcher();
    const search = new URLSearchParams(location.search).get("title");
    search && this.fetcher(search);
  }
  componentDidUpdate(prevProps, prevState) {
    // this.setState({ isLoading: true });
    if (prevState.query !== this.state.query) {
      this.fetcher(this.state.query);
    }
  }

  addState = async (searchQery) => await this.setState({ query: searchQery });

  fetcher = async (query) => {
    try {
      const result = await getMovieByTitle(query);
      this.setState({ movies: result });
      const { location } = this.props;
      this.props.history.push({ ...location, search: `title=${query}` }); //!!!!!!
      return result;
    } catch (error) {
      this.setState({ error });
      console.log("ERROR", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  goHome = () => this.props.history.push("/");
  goBack = () => this.props.history.goBack();
  render() {
    // console.log("this.props FORMA", this.props);
    const { movies } = this.state;
    return (
      <>
        <Form onSubmit={this.addState} />
        {!movies ? (
          <h2>nothing found</h2>
        ) : (
          <>
            <MoviesList data={movies} li={MoviesListItem} />
            <button onClick={this.goBack}>Go Back</button>
            <button onClick={this.goHome}>Home</button>
          </>
        )}
      </>
    );
  }
}

export default SearchForm;
