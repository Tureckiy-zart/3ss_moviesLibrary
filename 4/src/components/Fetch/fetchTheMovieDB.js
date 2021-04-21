import axios from "axios";

const API_KEY = "b10df2c9a5aac390aead1b7030414d18";
// const BASE_URL_OLD = "https://api.themoviedb.org/3";
// const BASE_URL = "https://api.themoviedb.org/4";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const moviesData = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  const data = moviesData.data.results;
  return data;
};

export const getMovieByTitle = async (searchQuery) => {
  const moviesData = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`
  );
  const data = moviesData.data.results;
  return data;
};
export const getMovieByID = async (id) => {
  const moviesData = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  const data = moviesData.data;
  return data;
};

export const getMovieCast = async (id) => {
  const moviesData = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  const data = moviesData.data;
  return data;
};
export const getMovieReview = async (id) => {
  const moviesData = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  const data = moviesData.data;
  return data;
};

// IMDB

// const API_KEY_IMDB = "k_SE2UVszk";

// export const  getDataFromIMDB = () => {
//   fetch(`https://imdb-api.com/en/API/Title/${API_KEY_IMDB}/tt1832382`)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log("error", error));
// };
// getDataFromIMDB()
