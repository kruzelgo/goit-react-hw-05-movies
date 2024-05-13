import axios from 'axios';

const API_KEY = '432440a0f2101c7e5f5f1625881e4cc7';
const BASE_URL = 'https://api.themoviedb.org';
const AUTHORIZATION =
  'eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0MzI0NDBhMGYyMTAxYzdlNWY1ZjE2MjU4ODFlNGNjNyIsInN1YiI6IjY2M2ZhZmY1ODQ3ZmFlNTYzMjY3NGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQUjQGmZCAZg5Ps9XNjTo8LpsmaEyasJxNnZ0C6CHBX1Q';

const options = {
  method: 'GET',
  params: {
    api_key: API_KEY,
    language: 'en-US',
    include_adult: false,
  },
  headers: {
    accept: 'application/json',
    Authorization: AUTHORIZATION,
  },
};

export const getTrendingMovies = async () => {
  options.url = `${BASE_URL}/3/trending/movie/day`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const searchMovies = async query => {
  options.url = `${BASE_URL}/3/search/movie`;
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
  options.url = `${BASE_URL}/3/movie/${movieId}`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieCredits = async movieId => {
  options.url = `${BASE_URL}/3/movie/${movieId}/credits`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieReviews = async movieId => {
  options.url = `${BASE_URL}/3/movie/${movieId}/reviews`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieTrailers = async movieId => {
  options.url = `${BASE_URL}/3/movie/${movieId}/videos`;
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// import axios from 'axios';

// const API_KEY = '432440a0f2101c7e5f5f1625881e4cc7';
// const BASE_URL = 'https://api.themoviedb.org';
// const AUTHORIZATION =
//   'eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiI0MzI0NDBhMGYyMTAxYzdlNWY1ZjE2MjU4ODFlNGNjNyIsInN1YiI6IjY2M2ZhZmY1ODQ3ZmFlNTYzMjY3NGY5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQUjQGmZCAZg5Ps9XNjTo8LpsmaEyasJxNnZ0C6CHBX1Q';

// const options = {
//   method: 'GET',
//   params: {
//     api_key: API_KEY,
//     language: 'en-US',
//     include_adult: false,
//   },
//   headers: {
//     accept: 'application/json',
//     Authorization: AUTHORIZATION,
//   },
// };

// export const getTrendingMovies = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching trending movies:', error);
//     throw error;
//   }
// };

// export const searchMovies = async query => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search/movie`, {
//       params: {
//         api_key: API_KEY,
//         query: query,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error('Error searching movies:', error);
//     throw error;
//   }
// };

// export const getMovieDetails = async movieId => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching movie details:', error);
//     throw error;
//   }
// };

// export const getMovieCredits = async movieId => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response.data.cast;
//   } catch (error) {
//     console.error('Error fetching movie credits:', error);
//     throw error;
//   }
// };

// export const getMovieReviews = async movieId => {
//   try {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
//       params: {
//         api_key: API_KEY,
//       },
//     });
//     return response.data.results;
//   } catch (error) {
//     console.error('Error fetching movie reviews:', error);
//     throw error;
//   }
// };
