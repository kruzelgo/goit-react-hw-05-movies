import React from 'react';
import PropTypes from 'prop-types';
import MovieDetails from '../MovieDetails/MovieDetails';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  if (!Array.isArray(movies)) {
    return (
      <p className={css.error}>
        Error: Something went wrong. Please try again later.
      </p>
    );
  }

  if (movies.length === 0) {
    return <p className={css.noResults}>No movies found.</p>;
  }

  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          <MovieDetails movie={movie} />
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
