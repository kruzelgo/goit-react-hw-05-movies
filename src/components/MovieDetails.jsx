import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../Api';

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
    <div>
      <h2>{movieData.title}</h2>
      <p>{movieData.overview}</p>
      <h3>Cast</h3>
      <ul>
        {credits.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetails;
