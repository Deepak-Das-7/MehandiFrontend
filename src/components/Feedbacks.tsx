import React from 'react';

interface Feedback {
  name: string;
  comment: string;
}

const Feedbacks: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => {
  return (
    <div className="feedbacks mt-4">
      <h2 className="mb-4">Customer Feedback</h2>
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div key={index} className="feedback card mb-3 shadow-sm">
            <div className="card-body">
              <p className="card-title mb-2">
                <strong>{feedback.name}</strong>
              </p>
              <p className="card-text">{feedback.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-info">No feedbacks yet.</div>
      )}
    </div>
  );
};

export default Feedbacks;
