import React, { useState, useEffect } from 'react';
import { Form, DropdownButton, DropdownItem, InputGroup, Button } from 'react-bootstrap';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface FilterBoxProps {
  onFilterChange: (filterType: string, filterValue: string) => void;
  loading?: boolean;
}

const FilterBox: React.FC<FilterBoxProps> = ({ onFilterChange, loading = false }) => {
  const [filterValue, setFilterValue] = useState('');
  const [filterType, setFilterType] = useState<'name' | 'rating' | 'price'>('name');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFilterChange(filterType, filterValue);
    }, 500); // Debounce filter input
    return () => clearTimeout(timeout);
  }, [filterValue, filterType, onFilterChange]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  const handleFilterTypeChange = (selectedType: string | null) => {
    if (selectedType) {
      setFilterType(selectedType as 'name' | 'rating' | 'price');
    }
  };

  const clearFilter = () => {
    setFilterValue('');
    onFilterChange(filterType, ''); // Clear filters
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center">
      <DropdownButton
        id="dropdown-basic-button"
        title={`Filter by: ${filterType}`}
        variant="outline-secondary"
        onSelect={handleFilterTypeChange}
        className="me-md-3 mb-3 mb-md-0"
      >
        <DropdownItem eventKey="name">Name/Description</DropdownItem>
        <DropdownItem eventKey="rating">Rating</DropdownItem>
        <DropdownItem eventKey="price">Price</DropdownItem>
      </DropdownButton>
      
      <InputGroup className="ms-2 w-400 w-md-25">
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search"
          value={filterValue}
          onChange={handleFilterChange}
          disabled={loading}
        />
        {filterValue && (
          <Button variant="outline-secondary" onClick={clearFilter} disabled={loading}>
            <FaTimes />
          </Button>
        )}
      </InputGroup>

      {loading && <div className="ms-2 text-muted">Loading...</div>}
    </div>
  );
};

export default FilterBox;
