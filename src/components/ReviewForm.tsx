import React, { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (review: { rating: number; comment: string }) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0 || comment.trim().length === 0) {
      setError('Please provide a rating and a comment.');
      return;
    }

    setError('');
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="review-form mb-3">
      <h2>Leave a Review</h2>

      <div className="form-group mb-3">
        <label htmlFor="rating">Rating (1-5):</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={rating}
          onChange={handleRatingChange}
          className="form-control" // Apply Bootstrap form control styling
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          className="form-control" // Apply Bootstrap form control styling
        />
      </div>

      {error && <p className="error text-danger">{error}</p>}

      <button type="submit" className="btn btn-primary">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;