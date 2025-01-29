import React from 'react';
import { Feedback } from '../utils/types';

const Feedbacks: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  return (
    <div className="feedbacks mt-1">
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div key={index} className="feedback card mb-1 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <p className="card-title mb-1 text-primary">
                  <strong style={{fontSize:"0.9rem"}}>{feedback.user.name}</strong>
                </p>
                <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                  {new Date(feedback.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="card-text" style={{fontSize:"0.8rem"}}>{feedback.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info text-center">No feedbacks yet.</div>
      )}
    </div>
  );
};

export default Feedbacks;
