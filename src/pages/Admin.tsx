import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import Sidebar from "../components/admin/Sidebar";
import TabSection from "../components/admin/TabSection";
import AddDataModal from "../components/admin/AddDataModal";
import { Booking, Feedback, MehendiDesign, User } from "../utils/types"; // The User type
import { fetchAllUsers } from "../api/auth";
import { fetchAllDesigns } from "../api/mehendiDesigns";
import { fetchAllFeedbacks } from "../api/feedback";
import { fetchBookings } from "../api/booking";

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]); // State for users
  const [designs, setDesigns] = useState<MehendiDesign[]>([]); // State for users
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]); // State for users
  const [bookings, setBookings] = useState<Booking[]>([]); // State for users  
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Show modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Fetch users on component mount
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching

      try {
        const userList = await fetchAllUsers(); // Fetch all users from the API
        const designList = await fetchAllDesigns(); // Fetch all users from the API
        const feedbakList = await fetchAllFeedbacks(); // Fetch all users from the API
        const bookings= await fetchBookings(); // Fetch all users from the API
        setUsers(userList); // Update state with the fetched users
        setDesigns(designList)
        setFeedbacks(feedbakList)
        setBookings(bookings)
      } catch (error) {
        setError("Error fetching users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getUsers(); // Fetch users when component mounts
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <Container fluid className="admin-panel">
      <Row>
        {/* Sidebar */}
        <Col md={2} className="bg-light vh-100 p-3 sidebar">
          <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />
        </Col>

        {/* Main Content Area */}
        <Col md={10} className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Admin Dashboard</h3>
            <div>
              <Button variant="primary" onClick={handleShowModal} className="me-2 mb-2">
                <i className="bi bi-plus-circle"></i> Add Design
              </Button>
            </div>
          </div>

          {/* Loading Indicator and Error Handling */}
          {loading && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status" />
            </div>
          )}

          {error && (
            <Alert variant="danger" className="mt-3">
              {error}
            </Alert>
          )}

          {/* Tab Content */}
          {!loading && !error && (
            <TabSection
              activeTab={activeTab}
              designs={designs}
              bookings={bookings}
              users={users} // Pass the users to TabSection
              feedbacks={feedbacks}
            />
          )}
        </Col>
      </Row>

      {/* Add Data Modal */}
      <AddDataModal show={showModal} onClose={handleCloseModal} />
    </Container>
  );
};

export default Admin;
