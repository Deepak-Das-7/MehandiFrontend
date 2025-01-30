import axiosInstance from '../utils/axiosInstance'; // Import the axios instance
import { User } from '../utils/types'; // The User type

// Define the structure for the login response
interface LoginResponse {
  token: string;
  user: User;
}

// Function to register a new user
export const registerUser = async (
  name: string,
  email: string,
  password: string,
  phone: string
): Promise<{ message: string; user: User; token: string }> => {
  try {
    const response = await axiosInstance.post('/auth/register', { name, email, password, phone });

    if (response.status === 201) {
      return response.data; // Return the response data (including the token and user)
    }

    throw new Error('Registration failed. Please try again.');
  } catch (error: any) {
    console.error('Error registering user:', error);
    throw new Error(error?.response?.data?.message || 'Error registering user');
  }
};

// Function to login the user
export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });

    if (response.status === 200) {
      return response.data; // Return the token and user data on successful login
    }

    throw new Error("Failed to login - Unexpected status code");
  } catch (error: any) {
    console.error('Error logging in:', error);
    throw new Error(error?.response?.data?.message || 'Failed to login');
  }
};

// Function to get user profile
export const getUserProfile = async (): Promise<User> => {
  try {
    const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage

    if (!token) {
      throw new Error('No token found, please log in again.');
    }

    const response = await axiosInstance.get('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
      },
    });

    if (response.status === 200) {
      return response.data; // Return user data
    }

    throw new Error('Failed to fetch user profile');
  } catch (error: any) {
    console.error('Error fetching user profile:', error);
    throw new Error(error?.response?.data?.message || 'Failed to fetch user profile');
  }
};

// Function to update user profile
export const updateUserProfile = async (
  name: string,
  email: string,
  phone: string
): Promise<User> => {
  try {
    const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage

    if (!token) {
      throw new Error('No token found, please log in again.');
    }

    const response = await axiosInstance.put('/auth/profile', { name, email, phone }, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
      },
    });

    if (response.status === 200) {
      return response.data; // Return updated user data
    }

    throw new Error('Failed to update profile');
  } catch (error: any) {
    console.error('Error updating user profile:', error);
    throw new Error(error?.response?.data?.message || 'Failed to update profile');
  }
};

// Function to delete user account
export const deleteUser = async (): Promise<string> => {
  try {
    const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage

    if (!token) {
      throw new Error('No token found, please log in again.');
    }

    const response = await axiosInstance.delete('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
      },
    });

    if (response.status === 200) {
      return 'User account deleted successfully';
    }

    throw new Error('Failed to delete user account');
  } catch (error: any) {
    console.error('Error deleting user account:', error);
    throw new Error(error?.response?.data?.message || 'Failed to delete user account');
  }
};

// Function to fetch all users
export const fetchAllUsers = async (): Promise<User[]> => {
  try {
    const token = localStorage.getItem('token'); // Assuming the token is saved in localStorage
    if (!token) {
      throw new Error('No token found, please log in again.');
    }

    const response = await axiosInstance.get('/auth/users', {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token in the Authorization header
      },
    });
    if (response.status === 200) {
      return response.data; // Return the list of users
    }

    throw new Error('Failed to fetch users');
  } catch (error: any) {
    console.error("Error fetching users:", error);
    throw new Error(error?.response?.data?.message || 'Error fetching users');
  }
};
