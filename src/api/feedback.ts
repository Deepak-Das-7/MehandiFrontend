// src/api/feedback.ts
import axiosInstance from "../utils/axiosInstance";
import { Feedback } from "../utils/types";

// ✅ Submit feedback
export const postFeedback = async (rating:number, comment:string, userId: string, designId:string|undefined ): Promise<Feedback> => {
  const feedback = { rating, comment, userId, designId };

  try {
    const response = await axiosInstance.post(`/feedbacks/${designId}`, feedback);
    if (response.status === 201) {
      return response.data;
    }
    throw new Error("Failed to submit feedback - Unexpected status code");
  } catch (error: any) {
    console.error("Error posting feedback:", error);
    throw new Error(error?.response?.data?.message || "Failed to submit feedback");
  }
};

// ✅ Fetch all feedbacks
export const fetchAllFeedbacks = async (): Promise<Feedback[]> => {
  try {
    const response = await axiosInstance.get("/feedbacks");
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to fetch feedbacks - Unexpected status code");
  } catch (error: any) {
    console.error("Error fetching feedbacks:", error);
    throw new Error(error?.response?.data?.message || "Failed to fetch feedbacks");
  }
};

// ✅ Fetch feedback by ID
export const fetchFeedbackById = async (id: string): Promise<Feedback> => {
  try {
    const response = await axiosInstance.get(`/feedbacks/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Feedback not found - Unexpected status code");
  } catch (error: any) {
    console.error("Error fetching feedback:", error);
    throw new Error(error?.response?.data?.message || "Feedback not found");
  }
};

// ✅ Fetch feedbacks by user ID
export const fetchFeedbacksByUser = async (userId: string): Promise<Feedback[]> => {
  try {
    const response = await axiosInstance.get(`/feedbacks/user/${userId}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("No feedbacks found for this user - Unexpected status code");
  } catch (error: any) {
    console.error("Error fetching user feedbacks:", error);
    throw new Error(error?.response?.data?.message || "No feedbacks found for this user");
  }
};

// ✅ Delete feedback
export const deleteFeedback = async (id: string): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.delete(`/feedbacks/${id}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Failed to delete feedback - Unexpected status code");
  } catch (error: any) {
    console.error("Error deleting feedback:", error);
    throw new Error(error?.response?.data?.message || "Failed to delete feedback");
  }
};
