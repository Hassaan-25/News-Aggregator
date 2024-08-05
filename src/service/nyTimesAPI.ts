import axios from "axios";

const API_KEY = "your_nytimes_api_key";
const BASE_URL = "https://api.nytimes.com/svc/search/v2";

export const fetchArticles = (query: string, section: string, date: string) => {
  return axios.get(`${BASE_URL}/articlesearch.json`, {
    params: {
      q: query,
      fq: `section_name:("${section}")`,
      begin_date: date,
      "api-key": API_KEY,
    },
  });
};
