import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For accessing URL params
import Feedbacks from '../../components/Feedbacks';
import ChatBox from '../../components/ChatBox';
import ReviewForm from '../../components/ReviewForm';
import { Feedback } from '../../utils/types';
import { fetchDesignById } from '../../api/mehendiDesigns';

const DesignDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [design, setDesign] = useState<any>(null);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  
  // Adding loading and error states
  const [loading, setLoading] = useState<boolean>(true);  // Default loading is true
  const [error, setError] = useState<string | null>(null); // Default error is null

  useEffect(() => {
    if (id) {
      const getDesign = async () => {
        try {
          setLoading(true); // Set loading to true when fetching starts
          setError(null); // Reset previous error
          const fetchedDesign = await fetchDesignById(id);
          setDesign(fetchedDesign); // Set the fetched design to state
          setFeedbacks(fetchedDesign.feedback.feedbacks)
        } catch (error: any) {
          console.error("Error fetching design:", error);
          setError("Error fetching design: " + error.message); // Set error message
        } finally {
          setLoading(false); // Set loading to false after the fetch finishes (success or failure)
        }
      };

      getDesign(); // Call the function to fetch the design
    }
  }, [id]); // Re-run effect when `id` changes

  const refreshFeedbacks = () => {
    if (id) {
      const fetchFeedbacks = async () => {
        try {
          const fetchedDesign = await fetchDesignById(id);
          setFeedbacks(fetchedDesign.feedback.feedbacks); // Refresh the feedbacks after submitting a new one
        } catch (error: any) {
          console.error("Error fetching feedbacks:", error);
        }
      };

      fetchFeedbacks();
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there is an error
  }

  if (!design) {
    return <div>No design found.</div>; // Handle case if no design is found
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
            <div className="card-body">
              <Feedbacks feedbacks={feedbacks} />
            </div>
            <div className="card-body">
              <ReviewForm designId={id} onSubmit={refreshFeedbacks} />
          </div>
          <div>
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDetail;
