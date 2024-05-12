import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../Api';
import PropTypes from 'prop-types';
import css from './MovieDetails.css';

const defaultImg =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-476x700.jpg';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Pobieranie szczegółów filmu
    getMovieDetails(id)
      .then(data => setMovieData(data))
      .catch(error => console.error('Error fetching movie details:', error));

    // Pobieranie obsady filmu
    getMovieCredits(id)
      .then(data => setCredits(data))
      .catch(error => console.error('Error fetching movie credits:', error));

    // Pobieranie recenzji filmu
    getMovieReviews(id)
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching movie reviews:', error));
  }, [id]);

  return (
    <main>
      <div className={css.movieDetailsContainer}>
        <Link to="/">
          <button className={css.movieDetailsButton}>Back</button>
        </Link>
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
            <ul className={css.reviewList}>
              {reviews.map(review => (
                <li key={review.id} className={css.reviewItem}>
                  <p className={css.reviewContent}>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

MovieDetails.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MovieDetails;
