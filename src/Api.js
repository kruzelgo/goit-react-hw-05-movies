import axios from 'axios';

const API_KEY = '432440a0f2101c7e5f5f1625881e4cc7';
const BASE_URL = 'https://api.themoviedb.org';
// const AUTHORIZATION =
//   'Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0MzI0NDBhMGYyMTAxYzdlNWY1ZjE2MjU4ODFlNGNjNyIsInN1YiI6IjY2M2ZhZmY1ODQ3ZmFlNTYzMjY3NGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQUjQGmZCAZg5Ps9XNjTo8LpsmaEyasJxNnZ0C6CHBX1Q';

const options = {
  method: 'GET',
  BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const getTrendingMovies = async () => {
  options.url = '/3/trending/movie/day';
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchMovies = async query => {
  options.url = '/3/search/movie';
  options.params.query = query;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  options.url = `/3/movie/${movieId}`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieCast = async movieId => {
  options.url = `/3/movie/${movieId}/credits`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  options.url = `/3/movie/${movieId}/reviews`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
