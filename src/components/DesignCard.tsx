import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {  FaStar } from 'react-icons/fa';


interface DesignCardProps {
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
}

const DesignCard: React.FC<DesignCardProps> = ({ image, title, description, rating, price }) => {
  return (
    <Card className="shadow-sm border-0 rounded">
      <Card.Img variant="top" src={image || '/logo512.png'} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning" />
            <span className="ms-1">{rating.toFixed(1)}</span>
          </div>
          <Button variant="outline-primary">${price}</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DesignCard;
