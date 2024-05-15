import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSection,
} from '../components/MoviesList/MoviesList.styled';
import SearchMovies from '../components/SearchForm/SearchForm';
import { searchMoviesByName } from '../Api/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await searchMoviesByName(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };

    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <StyledSection>
        <SectionTitle>Movies Page</SectionTitle>
        <SearchMovies onSubmit={handleSubmit} />
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSection>
    </main>
  );
};

export default Movies;
