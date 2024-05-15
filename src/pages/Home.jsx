import MoviesList from '../components/MoviesList/MoviesList';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Api/Api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadTrendingMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrendingMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : error ? (
        <p>
          Sorry, the trending videos list could not be downloaded. Try it again
          later.
        </p>
      ) : (
        <MoviesList trendingMovies={trendingMovies} />
      )}
    </>
  );
};

export default Home;
