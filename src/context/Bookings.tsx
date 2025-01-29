import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { fetchBookings } from '../api/booking'; // Import the correct function
import { Booking } from '../utils/types'; // Assuming Booking type is defined in your types

interface BookingContextType {
  bookings: Booking[]; // Changed appointments to bookings
  loading: boolean;
  error: string | null;
  fetchBookings: () => void; // Changed fetchAppointments to fetchBookings
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]); // Changed appointments to bookings
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBookingsFromAPI = async () => { // Renamed local function to avoid conflict
    setLoading(true);
    try {
      const data = await fetchBookings(); // Use the renamed function here
      setBookings(data); // Set bookings instead of appointments
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingsFromAPI(); // Call the renamed function in useEffect
  }, []);

  return (
    <BookingContext.Provider value={{ bookings, loading, error, fetchBookings: fetchBookingsFromAPI }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use the BookingContext
export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBookingContext must be used within a BookingProvider');
  }
  return context;
};
