import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const REQUEST_TOKEN = "b10df2c9a5aac390aead1b7030414d18";

// export const getTrendingMovies = async ({ page = 1 }) => {
export const getTrendingMovies = async ({ page = 1 }) => {
  // const [{ trendingMovies = [], error, canShowTrending }, setState] = useData(
  //   null
  // ); //Global state
  // console.log("pageQQQQQQQQQQQ :>> ", page);
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
  // sortBy = "primary_release_year.asc",
  sortBy = "popularity.desc",
}) => {
  const { data } = await axios.get(
    `/discover/movie?api_key=${REQUEST_TOKEN}&language=en-US&sort_by=${sortBy}&include_video=true&page=${page}&with_genres=${genre}`
  );
  return data.results;
};

export const getCollectionId = async ({ searchQuery, page = 1 }) => {
  const { data } = await axios.get(
    `/search/collection?api_key=${REQUEST_TOKEN}&language=en-US&query=${searchQuery}&page=${page}`
  );
  return data.results;
};

export const getCollection = async (id) => {
  const { data } = await axios.get(
    `/collection/${id}?api_key=${REQUEST_TOKEN}&language=en-US`
  );
  return data;
};

// page: 1
// results: Array(20)
// 0:
// adult: false
// backdrop_path: "/5npQuS3YbczUHz7NONIpfulA1PT.jpg"
// id: 288235
// name: "Cat Run Collection"
// original_language: "en"
// original_name: "Cat Run Collection"
// overview: "Cat Run is a 2011 American comedy action film directed by John Stockwell. Paz Vega stars as Catalina "Cat" Rona, a sexy, high-end escort holding the key evidence to a scandalous government cover-up. Two bumbling young detectives then become her unlikely protectors from a ruthless assassin hired to silence her. This was followed by the 2014 sequel Cat Run 2, with Scott Mechlowicz and Alphonso McAuley reprising their roles as Anthony and Julian."
// poster_path: "/60qNeMnm1WhKYxGOr5VP3mVTnDC.jpg"
// __proto__: Object
