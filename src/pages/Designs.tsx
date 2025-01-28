import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { designs } from '../data/dummyData';
import FilterBox from '../components/FilterBox';
import DesignCard from '../components/DesignCard';

const Designs: React.FC = () => {
  const [filteredDesigns, setFilteredDesigns] = useState(designs);
  const [loading, setLoading] = useState(false);

  const handleFilter = (filterType: string, filterValue: string) => {
    setLoading(true);

    const filtered = designs.filter((design) => {
      if (filterType === 'name') {
        return (
          design.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          design.description.toLowerCase().includes(filterValue.toLowerCase())
        );
      } else if (filterType === 'rating') {
        return design.rating >= Number(filterValue); // Filtering based on rating value
      } else if (filterType === 'price') {
        return design.price <= Number(filterValue); // Filtering based on price range
      }
      return true;
    });

    setFilteredDesigns(filtered);
    setLoading(false); // End loading
  };


  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <FilterBox onFilterChange={handleFilter} loading={loading} />
      </div>

      {loading ? (
        <div className="d-flex justify-content-center mt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row>
          {filteredDesigns.length > 0 ? (
            filteredDesigns.map((design) => (
              <Col md={4} sm={6} key={design.id}>
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
