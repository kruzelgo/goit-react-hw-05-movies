import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieList.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {' '}
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          {' '}
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={css.moviePoster}
          />{' '}
          <div>
            <p className={css.movieTitle}>{movie.title}</p>{' '}
          </div>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;