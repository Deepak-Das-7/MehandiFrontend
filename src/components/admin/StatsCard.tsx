import React from "react";
import { Card } from "react-bootstrap";

interface StatsCardProps {
  title: string;
  value: string | number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h3 className="text-primary">{value}</h3>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;
