// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../Api';
import MoviesList from '../../MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

// Home.propTypes = {
//   trendingMovies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default Home;
