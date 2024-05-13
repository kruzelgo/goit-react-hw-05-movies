import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../Api';
import css from './MovieDetails.module.css';

const defaultImg =
  'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-476x700.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieData(movieDetails);

        const movieCredits = await getMovieCredits(movieId);
        setCredits(movieCredits);

        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

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

export default MovieDetails;
