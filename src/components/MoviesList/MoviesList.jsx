import React from 'react';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import { Link } from 'react-router-dom';

const MovieList = ({ trendingMovies }) => {
  return (
    <section className={css.movieListSection}>
      <h2 className={css.movieListTitle}>Trending today</h2>
      <ul className={css.movieList}>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id} className={css.movieListItem}>
            <Link
              to={`/movies/${trendingMovie.id}`}
              className={css.movieListLink}
            >
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MovieList;
