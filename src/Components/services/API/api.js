import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

const fetchUrl = (request = "", options = {}) => {
  const {
    page = 1,
    id = 0,
    searchQuery = "",
    sortBy = "popularity.desc",
    genre = "",
  } = options;

  const url = {
    getTrending: `/trending/all/week?api_key=${REQUEST_TOKEN}&page=${page}`,
    getMovieByID: `/movie/${id}?api_key=${REQUEST_TOKEN}`,
    getCast: `/movie/${id}/credits?api_key=${REQUEST_TOKEN}`,
    getPerson: `/credit/${id}?api_key=${REQUEST_TOKEN}`,
    getReview: `/movie/${id}/reviews?api_key=${REQUEST_TOKEN}`,
    getMovieByTitle: `/search/movie?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`,
    getGenres: `/genre/movie/list?api_key=${REQUEST_TOKEN}&language=en-US`,
    getMovieByGenre: `/discover/movie?api_key=${REQUEST_TOKEN}&language=en-US&sort_by=${sortBy}&include_video=true&page=${page}&with_genres=${genre}`,
    getCollectionId: `/search/collection?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}`,
    getCurrnetCollection: `/collection/${id}?api_key=${REQUEST_TOKEN}&language=en-US`,
    getVideo: `/movie/${id}/videos?api_key=${REQUEST_TOKEN}&language=en-US`,
    getSimilar: `/movie/${id}/similar?api_key=${REQUEST_TOKEN}&language=en-US`,
    topRated: `/movie/top_rated?api_key=${REQUEST_TOKEN}&language=en-US`,
  };
  return url[request];
};

export const doFetch = async (request = "", options = {}) => {
  const apiRequest = request || options.apiRequest,
    url = fetchUrl(apiRequest, options);

  const { data } = await axios.get(url);
  // console.log(`data`, data);

  return data;
};
