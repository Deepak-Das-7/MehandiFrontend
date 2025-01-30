import React, { useState, useEffect } from 'react';
import DataTable from "./DataTable";
import StatsCard from "./StatsCard";
import { Row, Col, Pagination } from "react-bootstrap";
import { Feedback } from '../../utils/types';

interface TabSectionProps {
  activeTab: string;
  designs: any[];
  bookings: any[];
  users: any[];
  feedbacks: any[];
}

const ITEMS_PER_PAGE = 7;

const TabSection: React.FC<TabSectionProps> = ({
  activeTab,
  designs,
  bookings,
  users,
  feedbacks
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page index when activeTab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Paginate data
  const paginateData = (data: any[]) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Generate Pagination
  const generatePagination = (totalItems: number) => {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePageChange(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return pages;
  };

  switch (activeTab) {
    case "dashboard":
      return (
        <div>
          <Row className="g-4">
            <Col xs={12} sm={6} md={3}>
              <StatsCard title="Total Designs" value={designs.length} />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <StatsCard title="Total Bookings" value={bookings.length} />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <StatsCard title="Total Users" value={users.length} />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <StatsCard title="Pending Feedbacks" value={feedbacks.length} />
            </Col>
          </Row>
        </div>
      );
    case "designs":
      return (
        <div>
          <DataTable
            columns={["Name", "Category", "Price", "Rating", "Description"]}
            data={paginateData(designs).map((design) => ({
              Name: design.name,
              Category: design.category,
              Price: `₹${design.price}`,
              Rating: design.rating,
              Description: design.description,
            }))} 
          />
          <Pagination>{generatePagination(designs.length)}</Pagination>
        </div>
      );
    case "bookings":
      return (
        <div>
          <DataTable
            columns={["Customer", "Booking Date", "Booking Time", "Design", "Status"]}
            data={paginateData(bookings).map((booking) => ({
              Customer: booking.customer.name,
              "Booking Date": booking.bookingDate,
              "Booking Time": booking.bookingTime,
              Design: booking.designId.name,
              Status: booking.status,
            }))}
          />
          <Pagination>{generatePagination(bookings.length)}</Pagination>
        </div>
      );
    case "users":
      return (
        <div>
          <DataTable
            columns={["Name", "Email", "Phone", "Role"]}
            data={paginateData(users).map((user) => ({
              Name: user.name,
              Email: user.email,
              Phone: user.phone,
              Role: user.isAdmin ? "Admin" : "User",
            }))}
          />
          <Pagination>{generatePagination(users.length)}</Pagination>
        </div>
      );
    case "feedbacks":
      return (
        <div>
          <DataTable
            columns={["Design", "User", "Rating", "Comment"]}
            data={paginateData(feedbacks.flatMap((feedback) =>
              feedback.feedbacks.map((fb: Feedback) => ({
                Design: feedback.design.name,
                User: fb.user.name,
                Rating: fb.rating,
                Comment: fb.comment,
              }))
            ))}
          />
          <Pagination>{generatePagination(feedbacks.length)}</Pagination>
        </div>
      );
    default:
      return null;
  }
};

export default TabSection;
