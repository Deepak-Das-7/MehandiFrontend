// types.ts

// Mehendi Design Model Type
export interface MehendiDesign {
    _id: string; // Unique identifier for the design
    name: string; // Name of the mehendi design
    image: string; // URL for the image of the design
    price: number; // Price for the design
    category: 'Bridal' | 'Arabic' | 'Floral' | 'Traditional' | 'Minimal';
    rating: number; // Rating of the design (out of 5)
    description: string; // Description of the design
    feedback:{
      _id: string; // Unique identifier for the feedback
      design: string; // ID of the user who provided the feedback
      feedbacks: Feedback[]
    }; // Reference to the feedback model
  }
  // Booking Model Type
  export interface Booking {
    _id: string; // Unique identifier for the booking
    designId: string; // ID of the mehendi design being booked
    customer: User; // Name of the customer booking the design
    bookingDate: string; // Date of the booking (can be stored as a string or Date)
    bookingTime: string; // Time of the booking (can be stored as string or Date)
    status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled'; // Booking status
  }
  // Authentication Model Types
  export interface User {
    _id: string; // Unique identifier for the user
    email: string; // User email
    name: string; // User's full name
    phone: string; // User's phone number
    isAdmin: boolean; // Role of the user
    password?: string; // User password (hashed)
    createdAt?: string; // Date the user account was created
    updatedAt?: string; // Date the user account was last updated
  }
  
  export interface AuthResponse {
    token: string; // Authentication token
    user: User; // User data
  }
  
  // Contact Model Type (for customer queries)
  export interface Contact {
    _id: string; // Unique identifier for the contact query
    name: string; // Customer name
    email: string; // Customer email
    message: string; // Message from the customer
    createdAt: string; // Date the query was created
    status: 'Pending' | 'Resolved' | 'Closed'; // Status of the query
  }
  
  // Feedback Model Type (for customer reviews)
  export interface Feedback {
    _id: string; // Unique identifier for the feedback
    user: User; // ID of the user who provided the feedback
    rating: number; // Rating (out of 5)
    comment: string; // Feedback comment
    createdAt: string; // Date the feedback was submitted
  }
  
  // Chat Model Type (for real-time messaging)
  export interface Message {
    _id: string; // Unique identifier for the message
    senderId: string; // ID of the sender (can be user or admin)
    receiverId: string; // ID of the receiver (can be user or admin)
    message: string; // Message content
    timestamp: string; // Time when the message was sent
    status: 'Sent' | 'Received' | 'Read'; // Message status
  }
  
  // Slot Model Type (for booking slots)
  export interface Slot {
    _id: string; // Unique identifier for the slot
    date: string; // Date of the available slot
    time: string; // Time of the available slot
    isBooked: boolean; // Whether the slot is booked or available
  }
  