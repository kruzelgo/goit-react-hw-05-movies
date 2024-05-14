import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../Api/Api';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';

const Movies = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const query = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (query) {
          const results = await searchMovies(query);
          setSearchResults(results);
        }
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = async value => {
    const results = await searchMovies(value);
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSearch} />
      <MoviesList movies={searchResults} />
    </div>
  );
};

export default Movies;
