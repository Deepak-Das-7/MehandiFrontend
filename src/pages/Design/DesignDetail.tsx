import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For accessing URL params
import { useDesignContext } from '../../context/DesignContext';
import Feedbacks from '../../components/Feedbacks';
import ChatBox from '../../components/ChatBox';
import ReviewForm from '../../components/ReviewForm';

const DesignDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { designs, loading, error } = useDesignContext(); 
  const [design, setDesign] = useState<any>(null);
  const [feedbacks, setFeedbacks] = useState<any[]>([]); // Holds feedbacks for this design

  useEffect(() => {
    if (id && designs.length > 0) {
      const foundDesign = designs.find((design) => design._id === id);
      if (foundDesign) {
        setDesign(foundDesign); 
      }
    }
  }, [id, designs]);

  const handleFeedbackSubmit = async (review: { rating: number; comment: string }) => {
    try {
      // Assuming you want to save both rating and comment to the backend
      const feedback = {
        name: "User",  // Assuming you can dynamically get the user's name
        comment: review.comment, 
      };
  
      const response = await fetch(`/api/designs/${id}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });
  
      if (response.ok) {
        const newFeedback = await response.json();
        setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
      } else {
        throw new Error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!design) {
    return <div>No design found.</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Design Details */}
        <div className="col-md-8">
          <div className="card">
            <img src={'/logo512.png'} alt={design.name} className="card-img-top" />
            <div className="card-body">
              <h1 className="card-title">{design.name}</h1>
              <p className="card-text">{design.description}</p>
              <p><strong>Price:</strong> ${design.price}</p>
            </div>
          </div>
        </div>

        {/* Sidebar - Feedback Form, Feedbacks, and Chatbox */}
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <ReviewForm onSubmit={handleFeedbackSubmit} />
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-body">
              <Feedbacks feedbacks={feedbacks} />
            </div>
          </div>

          <div >
              <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDetail;
