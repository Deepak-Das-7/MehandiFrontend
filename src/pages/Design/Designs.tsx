import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import FilterBox from '../../components/FilterBox';
import DesignCard from '../../components/DesignCard';
import { useDesignContext } from '../../context/DesignContext';
import { MehendiDesign } from '../../utils/types';

const Designs: React.FC = () => {
  const { designs, loading, error } = useDesignContext(); // Access designs and loading from context
  const [filteredDesigns, setFilteredDesigns] = useState<MehendiDesign[]>(designs); // Initialize with all designs

  // Handle filter changes and update filtered designs
  const handleFilter = (filterType: string, filterValue: string) => {
    let filtered = [...designs]; // Copy of the original designs

    if (filterType === 'name') {
      filtered = filtered.filter(
        (design) =>
          design.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          design.description.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else if (filterType === 'rating') {
      filtered = filtered.filter((design) => design.rating >= Number(filterValue));
    } else if (filterType === 'price') {
      filtered = filtered.filter((design) => design.price <= Number(filterValue));
    }

    setFilteredDesigns(filtered); // Update the filtered designs state
  };

  // If there's an error, display the error message
  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <FilterBox onFilterChange={handleFilter} loading={loading} />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="g-2">
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <Col key={design._id} xs={6} sm={6} md={4} lg={3} xl={2} >
                  <DesignCard {...design} />
              </Col>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No designs found based on the filter criteria.</p>
            </div>
          )}
        </Row>
      )}
    </div>
  );
};

export default Designs;
