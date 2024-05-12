import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../Api';
import css from './Reviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div className={css.reviewWrapper}>
      <h3 className={css.reviewHeader}>Reviews</h3>
      {reviews.length ? (
        <ul className={css.reviewList}>
          {reviews.map(review => (
            <li className={css.reviewListItem} key={review.id}>
              <p className={css.review}>{review.content}</p>
              {review.author && (
                <p className={css.author}>Author: {review.author}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>This movie hasn't been reviewed yet.</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
