import axios from "axios";

const API_URL = "http://localhost:8081/api/users" //backend url

export const fetchUserData = async ()=>{
    try{
        const response = await axios.get(API_URL,{ withCredentials: true })
        return response.data
    }
    catch (error) {
        console.error("Error fetching news:", error);
        return [];
      }
};