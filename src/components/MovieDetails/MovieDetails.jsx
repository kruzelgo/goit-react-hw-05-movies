import { Suspense, useEffect, useState } from 'react';
import { LoadingIndicator } from '../LoadingIndicator';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { searchMoviesById } from '../../Api/Api';
import MovieCard from '../MovieCard/MovieCard';
import { Button, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await searchMoviesById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <Container>
        <Link to={location?.state?.from ?? '/'}>
          <Button type="button">Back</Button>
        </Link>

        <MovieCard movie={selectedMovie} />

        <Suspense fallback={<LoadingIndicator />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
