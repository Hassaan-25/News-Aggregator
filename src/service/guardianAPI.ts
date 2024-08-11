import axios from "axios";
import { Filters } from "../types";

const API_KEY = process.env.REACT_APP_GUARDIAN_API_KEY;
const BASE_URL = "https://content.guardianapis.com";

type GuardianApiParams = {
  "api-key"?: string;
  q?: string;
  fromDate?: string;
  section?: string;
  tag?: string;
};

export const fetchArticles = (filters: Filters) => {
  const { searchText, date, source, category } = filters;

  const params: GuardianApiParams = {
    "api-key": API_KEY,
  };

  if (searchText) {
    params.q = searchText;
  }

  if (date) {
    params.fromDate = date;
  }

  if (source) {
    params.section = source;
  }

  if (category) {
    params.tag = category;
  }

  return axios.get(`${BASE_URL}/search`, { params });
};
