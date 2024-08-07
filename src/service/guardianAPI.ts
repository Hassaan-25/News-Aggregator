import axios from "axios";


const API_KEY = "9e29dad4-dc30-4559-9ce3-6dc608d4a23f"
const BASE_URL = "https://content.guardianapis.com";


const headers = {
  "Content-Type": "application/json",
  'Access-Control-Allow-Origin' : '*',
};

const axiosInstance = axios.create({
  timeout: 1200000,


});


export const fetchArticles = async (query: string, section: string, date: string) => {
  console.log("Guardian API Key:", API_KEY); // Log API Key for debugging

  try {
    const response = await axiosInstance.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        section: section,
        from_date: date,
        'api-key': API_KEY,
      },
    });
    console.log("Response Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
