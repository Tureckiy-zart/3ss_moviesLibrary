import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

// export const getTrendingMovies = async ({ page = 1 }) => {
export const getTrendingMovies = async ({ page = 1 }) => {
  // const [{ trendingMovies = [], error, canShowTrending }, setState] = useData(
  //   null
  // ); //Global state
  console.log('pageQQQQQQQQQQQ :>> ', page);
  try {
    const { data } = await axios.get(
      `/trending/all/week?api_key=${REQUEST_TOKEN}&page=${page}`
    );
    return data.results;
  } catch (error) {
    console.warn("error.response.data :>> ", error.response.data);
    throw new Error(error);
  }
};
export const getMovieByID = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}?api_key=${REQUEST_TOKEN}`);
    return data;
  } catch (error) {
    console.warn("error.response.data :>> ", error.response.data);
    throw new Error(error);
  }
};
export const getMovieCast = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=${REQUEST_TOKEN}`
    );
    return data.cast;
  } catch (error) {
    console.warn("error.response.data :>> ", error.response.data);
    throw new Error(error);
  }
};
export const getMovieReview = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=${REQUEST_TOKEN}`
    );
    // console.log("data :>> ", data.results);

    return data.results;
  } catch (error) {
    console.warn("error.response.data :>> ", error.response.data);
    throw new Error(error);
  }
};
export const getGenres = async () => {
  const { data } = await axios.get(
    `/genre/movie/list?api_key=${REQUEST_TOKEN}&language=en-US`
  );
  return data.genres;
};
export const getMovieByTitle = async (searchQuery, page) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${REQUEST_TOKEN}&query=${searchQuery}&page=${page}&language=en-US`
  );

  return data.results;
};
// export const getMovieByGenre = async (
//   genre = 12,
//   page = 1,
//   sortBy = "popularity.desc"
// ) => {
//   const { data } = await axios.get(
//     `/discover/movie?api_key=${REQUEST_TOKEN}&language=en-US&sort_by=${sortBy}&include_video=false&page=${page}&with_genres=${genre}`
//   );
//   return data.results;
// };
// getMovieByGenre();

// (genre = 12), (page = 1), (sortBy = "popularity.desc");
export const getMovieByGenre = async ({
  genre = 12,
  page = 1,
  sortBy = "popularity.desc",
}) => {
  const { data } = await axios.get(
    `/discover/movie?api_key=${REQUEST_TOKEN}&language=en-US&sort_by=${sortBy}&include_video=false&page=${page}&with_genres=${genre}`
  );
  return data.results;
};
