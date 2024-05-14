import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';

const getReleaseYear = date => {
  const releaseDate = new Date(date);
  return isNaN(releaseDate) ? 'Unknown' : releaseDate.getFullYear();
};

const getUserScore = score => {
  return score ? `${(score * 10).toFixed(0)}%` : 'Not rated yet';
};

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;
  const location = useLocation();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <div className={css.movieCardContainer}>
      <img className={css.img} src={posterUrl} alt={`${title} poster`} />
      <div className={css.movieInfo}>
        <h2 className={css.movieName}>
          {title} ({getReleaseYear(release_date)})
        </h2>
        <p className={css.movieInfoText}>
          User Score: {getUserScore(vote_average)}
        </p>
        <p className={css.movieInfoText}>{overview}</p>
        {genres && genres.length > 0 && (
          <p className={css.movieInfoText}>
            <span className={css.movieInfoTextBold}>Genres:</span>{' '}
            {genres.map(genre => genre.name).join(', ')}
          </p>
        )}
      </div>
      <div className={css.moreInfoWrapper}>
        <h3 className={css.moreInfoHeader}>Additional information</h3>
        <ul className={css.list}>
          <li className={css.listItem}>
            <Link
              className={css.styledLink}
              to="cast"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li className={css.listItem}>
            <Link
              className={css.styledLink}
              to="reviews"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
          <li className={css.listItem}>
            <Link
              className={css.styledLink}
              to="trailers"
              state={{ from: location?.state?.from ?? '/' }}
            >
              Trailers
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieCard;
