import axios from "axios";

const API_KEY = process.env.REACT_APP_NYT_API_KEY;
const BASE_URL = "https://api.nytimes.com/svc/search/v2";

export const fetchArticles = (query: string, section: string, date: string, source: string) => {
  const params: any = {
    q: query,
    "api-key": API_KEY,
  };

  if (date) {
    params["begin_date"] = date.replace(/-/g, ""); // NYT requires date in YYYYMMDD format
  }

  if (section) {
    params.fq = `section_name:("${section}")`;
  }

  return axios.get(`${BASE_URL}/articlesearch.json`, { params });
};
