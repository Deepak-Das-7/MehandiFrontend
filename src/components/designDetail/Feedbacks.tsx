import React from 'react';
import { Feedback } from '../../utils/types';
import { FaUserCircle } from 'react-icons/fa';

const Feedbacks: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  return (
    <div className="feedbacks mt-2">
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div 
            key={index} 
            className="feedback shadow-sm p-2 border rounded bg-white mb-1 d-flex flex-column"
            style={{ borderLeft: "3px solid #007bff", fontSize: "0.8rem" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <FaUserCircle className="text-secondary me-2 fs-5 mb-1" />
                <span className="fw-semibold text-primary">{feedback.user.name}</span>
              </div>
              <span className="text-muted small">
                {new Date(feedback.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-secondary mb-0 small" style={{ lineHeight: "1.2" }}>
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
