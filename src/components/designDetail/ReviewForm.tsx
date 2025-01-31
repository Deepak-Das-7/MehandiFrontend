import React, { useState, useEffect } from "react";
import { postFeedback } from "../../api/feedback"; // Import API function
import { User } from "../../utils/types";
import { jwtDecode } from "jwt-decode";

interface ReviewFormProps {
  designId: string | undefined;
  onSubmit: () => void; // onSubmit callback function passed from parent
}

const ReviewForm: React.FC<ReviewFormProps> = ({ designId, onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [userId, setUserId] = useState<string>("679b2e3899a3f75245b6da89");

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token from storage

    if (token) {
      try {
        const decodedUser = jwtDecode<User>(token); // Decode JWT
        setUserId(decodedUser._id); // Set user details in state
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token"); // Remove corrupted token
      }
    } else {
      console.log("No token found.");
    }
  }, []); // Runs only once when the component mounts

  const handleRatingChange = (newRating: number) => {
    if (!loading) {
      setRating(newRating); // Disable rating change while loading
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (rating === 0 || comment.trim().length < 5) {
      setError("Please provide a rating and a comment (at least 5 characters).");
      return;
    }

    // Ensure user is present before submitting
    if (!userId) {
      setError("User not found. Please login.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Call the postFeedback API function
      await postFeedback(rating, comment, userId, designId);
      // alert("Thank you for your review!");
      setRating(0);  // Reset rating
      setComment(""); // Reset comment

      // Call the onSubmit callback to notify the parent
      onSubmit(); // This will trigger the parent's callback function
    } catch (error) {
      setError("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form mb-4 shadow-lg p-4 rounded bg-light">
      <h3 className="mb-2 text-center text-primary">Leave a Review</h3>

      {/* Rating Section */}
      <div className="form-group mb-2 d-flex align-items-center gap-2">
        <label htmlFor="rating" className="fs-6 text-muted">Rating (1-5):</label>
        <div className="d-flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star fs-5 ${rating >= star ? "text-warning" : "text-muted"} me-1`}
              onClick={() => handleRatingChange(star)} // Disable clicks while loading
              style={{ cursor: "pointer", transition: "color 0.2s" }}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Comment Section */}
      <div className="form-group mb-2">
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          className="form-control p-3 border-1 border-primary rounded-2 shadow-sm"
          placeholder="Write your comment here..."
          rows={3}
          disabled={loading} // Disable textarea while submitting
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-danger text-center mb-2">{error}</p>}

      {/* Submit Button */}
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="w-100 py-2 rounded-pill shadow-sm btn btn-primary"
          disabled={loading}
          style={{
            transition: "background-color 0.2s",
          }}
        >
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
