import axios from "axios";

// const API_KEY = "473afcc24b57486399d7538382cc165d";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = (query: string, date: string) => {
  return axios.get(`${BASE_URL}/everything`, {
    params: {
      //   q: "election",
      q: query,
      //   from: "2024-8-1",
      fromDate: date,
      sortBy: "popularity",
      apiKey: API_KEY,
    },
  });
};
