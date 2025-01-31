import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MehendiDesign } from '../utils/types';

const DesignCard: React.FC<MehendiDesign> = ({ _id, image, name, description, rating, price }) => {
  return (
    <Link to={`/designs/${_id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="shadow-sm border-0 rounded">
        <Card.Img variant="top" src={`/photos/${image}.png`} alt={name} className="rounded-top" style={{ height: 250 }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-2" style={{ fontSize: '1rem' }}>
            {name.slice(0, 15)}{name.length > 15 ? '...' : ''}
          </Card.Title>
          <Card.Text className="text-muted" style={{ fontSize: '0.7rem' }}>
            {description.slice(0, 40)}{description.length > 40 ? '...' : ''}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div className="d-flex align-items-center">
              <FaStar className="text-warning me-1" />
              <span className="ms-1" style={{ fontSize: '0.9rem' }}>{rating.toFixed(1)}</span>
            </div>
            <Button 
              variant="outline-primary" 
              className="fs-6 py-1 px-2" 
              style={{ fontWeight: '500', letterSpacing: '0.5px' }}
            >
              ${price}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DesignCard;
