import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Api/Api';
import MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
