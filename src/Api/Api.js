// import axios from 'axios';

const API_KEY = '432440a0f2101c7e5f5f1625881e4cc7';
// const BASE_URL = 'https://api.themoviedb.org';
// const AUTHORIZATION =
//   'Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0MzI0NDBhMGYyMTAxYzdlNWY1ZjE2MjU4ODFlNGNjNyIsInN1YiI6IjY2M2ZhZmY1ODQ3ZmFlNTYzMjY3NGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQUjQGmZCAZg5Ps9XNjTo8LpsmaEyasJxNnZ0C6CHBX1Q';

// const options = {
//   method: 'GET',
//   BASE_URL,
//   params: {
//     api_key: API_KEY,
//     language: 'en-US',
//   },
// };

export const getTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async movieName => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      movieName
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const getMovieCast = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};
