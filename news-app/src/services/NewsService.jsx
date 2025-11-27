import axios from "axios";

const API_URL = "http://localhost:8081/api/news"; // Backend URL

export const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true }); // Ensure CORS handling
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
