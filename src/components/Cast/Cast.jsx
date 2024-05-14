import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../Api/Api';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const movieCredits = await getMovieCast(movieId);
        setCast(movieCredits || []);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchCredits();
  }, [movieId]);

  return (
    <div className={css.castWrapper}>
      <h3 className={css.castHeader}>Cast</h3>
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map(actor => (
            <li className={css.castListItem} key={actor.id}>
              {actor.profile_path ? (
                <img
                  className={css.castImage}
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={`${actor.name} profile`}
                />
              ) : (
                <img
                  className={css.castImage}
                  src={`https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`}
                  alt={`${actor.name} profile`}
                />
              )}
              <div className={css.castInfo}>
                <h3 className={css.castName}>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noCastText}>No cast information available.</p>
      )}
    </div>
  );
};

export default Cast;
