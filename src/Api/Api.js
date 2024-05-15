// api.js

import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const API_KEY = '432440a0f2101c7e5f5f1625881e4cc7';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return data;
};

export const searchMoviesByName = async query => {
  const { data } = await axios.get(
    `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data;
};

export const searchMoviesById = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};
