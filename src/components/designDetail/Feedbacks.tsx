import React from "react";
import { Feedback } from "../../utils/types";
import { FaUserCircle, FaStar } from "react-icons/fa";

const Feedbacks: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  return (
    <div className="feedbacks mt-2">
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="feedback shadow-sm p-2 border rounded bg-white mb-1 d-flex flex-column"
            style={{ fontSize: "0.8rem" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaUserCircle className="text-muted me-1 fs-6" />
                <span
                  className="fw-bold text-primary fs-7 me-2"
                >
                  {feedback.user.name}
                </span>
                <div className="d-flex align-items-center">
                  {[...Array(Math.floor(feedback.rating))].map((_, index) => (
                    <FaStar key={index} className="text-warning me-1 small" />
                  ))}
                  {[...Array(5 - Math.floor(feedback.rating))].map(
                    (_, index) => (
                      <FaStar
                        key={index + Math.floor(feedback.rating)}
                        className="text-muted me-1 small"
                      />
                    )
                  )}
                </div>
              </div>
              <span className="text-muted small fs-7" >
                {new Date(feedback.createdAt).toLocaleString()}
              </span>
            </div>

            <p className="text-secondary mb-0 small ms-3">
              {feedback.comment}
            </p>
          </div>
        ))
      ) : (
        <div className="alert alert-info text-center fw-bold p-2 small">
          No feedbacks yet.
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
