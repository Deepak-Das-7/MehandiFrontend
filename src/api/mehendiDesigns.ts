// src/api/mehendiDesigns.ts
import axiosInstance from '../utils/axiosInstance'; // Import the axios instance
import { MehendiDesign } from '../utils/types'; // The MehendiDesign type


export const addDesign = async (designData: MehendiDesign): Promise<MehendiDesign> => {
  try {
    // Make the POST request to the backend
    const response = await axiosInstance.post('/designs', designData);

    if (response.status === 201) {
      return response.data;
    }

    throw new Error("Failed to add design - Unexpected status code");
  } catch (error: any) {
    console.error("Error adding design:", error);
    throw new Error(error?.response?.data?.message || "Failed to add design");
  }
};

// Function to fetch all Mehendi Designs
export const fetchAllDesigns = async (): Promise<MehendiDesign[]> => {
  try {
    const response = await axiosInstance.get('/designs');
    if (response.status === 200) {
      return response.data;
    }
    throw new Error('Failed to fetch designs');
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    throw new Error('Error fetching designs: ' + error.message);
  }
};

export const fetchDesignById = async (id: string): Promise<MehendiDesign> => {
  try {
    const response = await axiosInstance.get(`/designs/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error('Design not found');
  } catch (error: any) {
    console.error(error); // Log the error for debugging
    throw new Error('Error fetching design: ' + error.message);
  }
};
