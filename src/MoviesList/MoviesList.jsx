import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          <Link to={`/movie/${movie.id}`} className={css.movieLink}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className={css.moviePoster}
            />
            <div className={css.movieInfo}>
              <h2 className={css.movieName}>
                {movie.title} ({getReleaseYear(movie.release_date)})
              </h2>
              <p className={css.movieInfoText}>
                User Score: {getUserScore(movie.vote_average)}
              </p>
              <p className={css.movieInfoText}>{movie.overview}</p>
              {movie.genres && movie.genres.length > 0 && (
                <p className={css.movieInfoText}>
                  <span className={css.movieInfoTextBold}>Genres:</span>{' '}
                  {movie.genres.map(genre => genre.name).join(', ')}
                </p>
              )}
            </div>
          </Link>
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
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string.isRequired })
      ),
    })
  ).isRequired,
};

const getReleaseYear = releaseDate => {
  const releaseYear = new Date(releaseDate).getFullYear();
  return isNaN(releaseYear) ? 'Unknown' : releaseYear;
};

const getUserScore = voteAverage => {
  return voteAverage ? `${(voteAverage * 10).toFixed(0)}%` : 'Not rated yet';
};

export default MoviesList;

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './MovieList.module.css';
// import { Link } from 'react-router-dom';

// const MoviesList = ({ movies }) => {
//   return (
//     <ul className={css.moviesList}>
//       {movies.map(movie => (
//         <li key={movie.id} className={css.movieItem}>
//           <Link to={`/movie/${movie.id}`}>
//             <img
//               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//               alt={movie.title}
//               className={css.moviePoster}
//             />
//           </Link>
//           <div>
//             <p className={css.movieTitle}>{movie.title}</p>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// MoviesList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       poster_path: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default MoviesList;
