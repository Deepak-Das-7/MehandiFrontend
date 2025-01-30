import React, { useState, useEffect } from "react";
import { postFeedback } from "../../api/feedback"; // Import API function
import { User } from "../../utils/types";

interface ReviewFormProps {
  designId: string | undefined;
  onSubmit: () => void; // onSubmit callback function passed from parent
}

const ReviewForm: React.FC<ReviewFormProps> = ({ designId, onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null); // State to hold the user info

  // Fetch user info from localStorage or fallback to mock user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user data
    } else {
      // Fallback user (in case localStorage is empty)
      setUser({
        "_id": "6799d68bc6282c85ca39ecc2",
        "email": "bob@example.com",
        "password": "$2b$10$Rm0hYr55fHYTskdZgWVh0OG5vqHG4V4ly0kxF5h7L0VYtO6tu3Lnu",
        "name": "Bob Smith",
        "phone": "+91 9988776655",
        "isAdmin": false,
        "createdAt": "2025-01-16T09:00:00Z",
        "updatedAt": "2025-01-16T09:00:00Z"
      });
      // You could also handle this case by showing a login prompt
    }
  }, []);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (rating === 0 || comment.trim().length === 0) {
      setError("Please provide a rating and a comment.");
      return;
    }

    // Ensure user is present before submitting
    if (!user) {
      setError("User not found. Please login.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Call the postFeedback API function
      await postFeedback(rating, comment, user._id, designId);
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
    <h3 className="mb-4 text-center text-primary">Leave a Review</h3>
  
    {/* Rating Section */}
    <div className="form-group mb-4 d-flex align-items-center gap-3">
      <label htmlFor="rating" className="fs-5 text-muted">Rating (1-5):</label>
      <div className="d-flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star fs-2 ${rating >= star ? "text-warning" : "text-muted"} me-2`}
            onClick={() => handleRatingChange(star)}
            style={{ cursor: "pointer", transition: "color 0.2s" }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  
    {/* Comment Section */}
    <div className="form-group mb-4">
      <label htmlFor="comment" className="fs-5 text-muted">Comment:</label>
      <textarea
        id="comment"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
        className="form-control p-3 border-2 border-primary rounded-3 shadow-sm"
        placeholder="Write your comment here..."
        rows={5}
      />
    </div>
  
    {/* Error Message */}
    {error && <p className="text-danger text-center mb-3">{error}</p>}
  
    {/* Submit Button */}
    <div className="d-flex justify-content-center">
      <button
        type="submit"
        className="btn btn-primary px-4 py-2 fs-5"
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
