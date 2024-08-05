import axios from "axios";

const API_KEY = "your_guardian_api_key";
const BASE_URL = "https://content.guardianapis.com";

export const fetchArticles = (query: string, section: string, date: string) => {
  return axios.get(`${BASE_URL}/search`, {
    params: {
      q: query,
      section: section,
      from_date: date,
      apikey: API_KEY,
    },
  });
};
