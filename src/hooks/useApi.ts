import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { fetchArticles as fetchNewsAPIArticles } from "../service/newsAPI";
import { fetchArticles as fetchNYTimesArticles } from "../service/nyTimesAPI";
import { useFiltersContext } from "../context/FiltersContext";
import { convertNewsArticle } from "../utils/helpers";
import { Article } from "../types";

interface UseApiResponse {
  data: Article[];
  error: string | null;
  loading: boolean;
}

const useApi = (): UseApiResponse => {
  const [data, setData] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const {
    filters: { searchText, category, date, source },
  } = useFiltersContext();

  const currentDate = date || new Date().toISOString().split("T")[0];

  const fetchData = useCallback(async () => {
    setLoading(true);

    const promises = [
      fetchNewsAPIArticles(searchText ? searchText: "general"),
      fetchNYTimesArticles(searchText, category, currentDate, source),
    ];

    try {
      const results = await Promise.allSettled(promises);

      const newsAPIResponse =
        results[0].status === "fulfilled" ? results[0].value.data.articles : [];
      const nyTimesResponse =
        results[1].status === "fulfilled"
          ? results[1].value.data.response.docs
          : [];

      const allArticles = [
        ...convertNewsArticle(newsAPIResponse),
        ...convertNewsArticle(nyTimesResponse),
      ];
      console.log("Fetched articles:", allArticles);

      setData(allArticles);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [searchText, category, source]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};

export default useApi;