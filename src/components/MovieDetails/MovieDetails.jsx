import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../Api';
import PropTypes from 'prop-types';
import css from './MovieDetails.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const details = await getMovieDetails(movieId);
        const movieCredits = await getMovieCredits(movieId);
        const movieReviews = await getMovieReviews(movieId);
        setMovieData(details);
        setCredits(movieCredits);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  return (
    <div className={css.movieDetails}>
      <h2 className={css.movieTitle}>{movieData.title}</h2>
      {movieData.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          width={250}
          alt="poster"
        />
      ) : (
        <img src={defaultImg} width={250} alt="default poster" />
      )}
      <p className={css.movieOverview}>{movieData.overview}</p>
      <div className={css.movieInfo}>
        <h3 className={css.movieInfoItem}>Cast</h3>
        <ul className={css.castList}>
          {credits.map(actor => (
            <li key={actor.id} className={css.castItem}>
              <span className={css.castName}>{actor.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.movieInfo}>
        <h3 className={css.movieInfoItem}>Reviews</h3>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
