import axios from "axios";
import { Filters } from "../types";

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/search/v2";

type NYTApiParams = {
  q?: string;
  "api-key"?: string;
  begin_date?: string;
  fq?: string;
};

export const fetchArticles = (filters: Filters) => {
  const { searchText, date, source, category } = filters;

  const params: NYTApiParams = {
    q: searchText,
    "api-key": API_KEY,
  };

  if (date) {
    params["begin_date"] = date.replace(/-/g, "");
  }

  if (source) {
    params.fq = `section_name:("${source}")`;
  }

  if (category) {
    params.fq = `section_name:("${category}")`;
  }
  



  return axios.get(`${BASE_URL}/articlesearch.json`, { params });
};
