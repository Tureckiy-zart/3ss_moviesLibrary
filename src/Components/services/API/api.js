import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

const fetchUrl = (
  request = "getTrendingMovies",
  {
    page = 1,
    id = 0,
    searchQuery = "",
    sortBy = "popularity.desc",
    genre = "",
  } = {}
) => {
  // console.log(`page`, page);
  const url = {
    getTrendingMovies: `/trending/all/week?api_key=${REQUEST_TOKEN}&page=${page}`,
    getMovieByID: `/movie/${id}?api_key=${REQUEST_TOKEN}`,
    getMovieCast: `/movie/${id}/credits?api_key=${REQUEST_TOKEN}`,
    getMovieReview: `/movie/${id}/reviews?api_key=${REQUEST_TOKEN}`,
    getMovieByTitle: `/search/movie?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`,
    getGenres: `/genre/movie/list?api_key=${REQUEST_TOKEN}&language=en-US`,
    getMovieByGenre: `/discover/movie?api_key=${REQUEST_TOKEN}&language=en-US&sort_by=${sortBy}&include_video=true&page=${page}&with_genres=${genre}`,
    getCurrnetCollection: `/collection/${id}?api_key=${REQUEST_TOKEN}&language=en-US`,
    getCollectionId: `/search/collection?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}`,
  };
  return url[request];
};

export const doFetch = async (request, opt) => {
  const url = fetchUrl(request, opt);
  const { data } = await axios.get(url);
  // console.log(`data API`, data);
  return data;
};

// export const getPersonByID = async (id) => {
// const  data  = await axios.get(`/person/287?api_key=b10df2c9a5aac390aead1b7030414d18b10df2c9a5aac390aead1b7030414d18&language=en-US&append_to_response=images`
// `/collection/${id}?api_key=${REQUEST_TOKEN}&language=en-US`
// );
// const { data } = await axios.get(
//   `/collection/${id}?api_key=${REQUEST_TOKEN}&language=en-US`
// );
// console.log('data :>> ', data);
// return data;
// };
