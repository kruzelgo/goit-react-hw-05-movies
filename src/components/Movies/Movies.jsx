// Movies.jsx

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMovies } from '../../Api';
import MoviesList from '../../MoviesList/MoviesList';
import SearchForm from '../../SearchForm/SearchForm';

const Movies = ({ searchQuery, onSearch }) => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const query =
    new URLSearchParams(location.search).get('query') || searchQuery;

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
    onSearch(value);
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSearch} />
      <MoviesList movies={searchResults} />
    </div>
  );
};

Movies.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Movies;
