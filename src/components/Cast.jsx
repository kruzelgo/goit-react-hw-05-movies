import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../Api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const movieCredits = await getMovieCredits(movieId);
        setCredits(movieCredits);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {credits.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
