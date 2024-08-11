import axios from "axios";
import { Filters } from "../types";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

type NewsApiParams = {
  q?: string;
  sortBy?: string;
  apiKey?: string;
  from?: string;
  sources?: string;
  category?: string;
};


export const fetchArticles = (filters: Filters) => {
  const { searchText, date, source, category } = filters;

  const params: NewsApiParams = {
    q: searchText.length > 0 ? searchText : "general",
    sortBy: "popularity",
    apiKey: API_KEY,
  };

  if (date) {
    params.from = date;
  }

  if (source) {
    params.sources = source;
  }


  if (category) {
    params.category = category;
    return axios.get(`${BASE_URL}/top-headlines`, { params });
  }

  return axios.get(`${BASE_URL}/everything`, { params });
};
