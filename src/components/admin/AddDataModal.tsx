import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { addDesign } from "../../api/mehendiDesigns";

interface AddDataModalProps {
  show: boolean;
  onClose: () => void;
}

const AddDataModal: React.FC<AddDataModalProps> = ({ show, onClose }) => {
  const [designData, setDesignData] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
    rating: "",
    description: "",
  });

  // Reset form data when modal is closed
  useEffect(() => {
    if (!show) {
      setDesignData({
        name: "",
        image: "",
        price: "",
        category: "",
        rating: "",
        description: "",
      });
    }
  }, [show]);

  const handleDesignChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDesignData({
      ...designData,
      [name]: name === "price" || name === "rating" ? Number(value) : value,
    });
  };

    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validation: Ensure all fields are filled
    if (!designData.name || !designData.image || !designData.price || !designData.category || !designData.rating) {
      alert("All fields are required!");
      return;
    }
  
    try {
      // Create new design object with numeric values for price and rating
      const newDesign: any = {
        ...designData,
        price: Number(designData.price),
        rating: Number(designData.rating),
      };
  
      // Call the API function to add the design
      await addDesign(newDesign);
  
      // Close the modal after successful submission
      onClose();
  
      // Notify the user that the design has been added successfully
      alert("Design added successfully");
  
    } catch (error) {
      // Handle error with a more detailed message
      console.error("Error adding design:", error);
      alert("Failed to add design. Please try again later.");
    }
  };
  

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Design</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Design Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={designData.name}
              onChange={handleDesignChange}
            />
          </Form.Group>
          <Form.Group controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={designData.image}
              onChange={handleDesignChange}
            />
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={designData.category}
              onChange={handleDesignChange}
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={designData.price}
              onChange={handleDesignChange}
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              name="rating"
              value={designData.rating}
              onChange={handleDesignChange}
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={designData.description}
              onChange={handleDesignChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Design
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddDataModal;
