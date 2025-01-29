import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'http://192.168.31.161:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
