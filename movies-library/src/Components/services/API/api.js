import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

// // `/discover/movie?api_key=b10df2c9a5aac390aead1b7030414d18&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1`

// // const poster_path = "https://image.tmdb.org/t/p/w500";

// // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

// export const getTrendingMovies = async (page = 1) => {
//   const { data } = await axios.get(
//     `/trending/all/week?api_key=${REQUEST_TOKEN}&page=${page}`
//   );
// //   console.log("data :>> ", data);
//   return data.results;
// };
// // getTrendingMovies();

// export const getMovieByTitle = async (searchQuery) => {
//   const { data } = await axios.get(
//     `/search/movie?api_key=${REQUEST_TOKEN}&query=${searchQuery}&page=1&include_adult=false`
//   );
//   return data.results;
// };
// getMovieByTitle("batman");

export const getTrendingMovies = async (page = 1) => {
  console.log('page :>> ', page);
  const { data } = await axios.get(
    `/trending/all/week?api_key=${REQUEST_TOKEN}&page=${page}`
  );
  return data.results;
};

export const getMovieByID = async (id) => {
  const { data } = await axios.get(`/movie/${id}?api_key=${REQUEST_TOKEN}`);
  console.log('data :>> ', data);
  return data;
};
