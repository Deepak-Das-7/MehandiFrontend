import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const getDesigns = async () => {
  const response = await axios.get(`${API_BASE_URL}/designs`);
  return response.data;
};

export const bookAppointment = async (appointmentData: any) => {
  const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
  return response.data;
};
