import React, { useState } from "react";
import { Container, Row, Col, Button, } from "react-bootstrap";
import Sidebar from "../components/admin/Sidebar";
import TabSection from "../components/admin/TabSection";
import AddDataModal from "../components/admin/AddDataModal";
import { designs, bookings, users, feedbacks } from "../utils/data";

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


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

          {/* Tab Content */}
          <TabSection
            activeTab={activeTab}
            designs={designs}
            bookings={bookings}
            users={users}
            feedbacks={feedbacks}
          />
        </Col>
      </Row>

      {/* Add Data Modal */}
      <AddDataModal
        show={showModal}
        onClose={handleCloseModal}
      />
    </Container>
  );
};

export default Admin;
