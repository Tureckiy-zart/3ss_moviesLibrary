import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

export const getTrendingMovies = async ({ page = 1 }) => {
  const { data } = await axios.get(
    `/trending/all/week?api_key=${REQUEST_TOKEN}&page=${page}`
  );
  return data.results;
};
export const getMovieByID = async (id) => {
  const { data } = await axios.get(`/movie/${id}?api_key=${REQUEST_TOKEN}`);
  return data;
};
export const getMovieCast = async (id) => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${REQUEST_TOKEN}`
  );
  return data.cast;
};
export const getMovieReview = async (id) => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${REQUEST_TOKEN}`
  );
  return data.results;
};

export const getMovieByTitle = async ({ searchQuery, page = 1 }) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
  );

  return data.results;
};
export const getGenres = async () => {
  const { data } = await axios.get(
    `/genre/movie/list?api_key=${REQUEST_TOKEN}&language=en-US`
  );
  return data.genres;
};
export const getMovieByGenre = async ({
  genre = 12,
  page = 1,
  sortBy = "popularity.desc",
}) => {
  const { data } = await axios.get(
    `/discover/movie?api_key=${REQUEST_TOKEN}&language=en-US&sort_by=${sortBy}&include_video=true&page=${page}&with_genres=${genre}`
  );
  return data.results;
};
export const getCollection = async (id) => {
  const { data } = await axios.get(
    `/collection/${id}?api_key=${REQUEST_TOKEN}&language=en-US`
  );
  return data;
};

export const getCollectionId = async ({ searchQuery, page = 1 }) => {
  const { data } = await axios.get(
    `/search/collection?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}`
  );
  return data.results;
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
//
