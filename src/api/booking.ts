// src/api/bookings.ts
import axiosInstance from '../utils/axiosInstance'; // Import the axios instance
import { Booking } from '../utils/types'; // The Booking type

// Function to fetch all bookings
export const fetchBookings = async (): Promise<Booking[]> => {
  try {
    const response = await axiosInstance.get('/bookings'); 
    return response.data;
  } catch (error) {
    throw new Error('Error fetching bookings: ' + error);
  }
};
