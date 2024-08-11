import { useState, useEffect, useCallback } from "react";
import { fetchArticles as fetchNewsAPIArticles } from "../service/newsAPI";
import { fetchArticles as fetchNYTimesArticles } from "../service/nyTimesAPI";
import { fetchArticles as fetchGuardianAPIArticles } from "../service/guardianAPI";
import { convertNewsArticle } from "../utils/helpers";
import { Article, Filters } from "../types";

interface UseApiResponse {
  data: Article[];
  error: string | null;
  loading: boolean;
}

const useApi = (filters: Filters): UseApiResponse => {
  const [data, setData] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setLoading(true);

    const promises = [
      fetchNewsAPIArticles(filters),
      fetchNYTimesArticles(filters),
      fetchGuardianAPIArticles(filters),
    ];

    try {
      const results = await Promise.allSettled(promises);

      const newsAPIResponse =
        results[0].status === "fulfilled" ? results[0].value.data.articles : [];
      const nyTimesResponse =
        results[1].status === "fulfilled"
          ? results[1].value.data.response.docs
          : [];
      const guardianAPIResponse =
        results[2].status === "fulfilled"
          ? results[2].value.data.response.results
          : [];

      const allArticles = [
        ...convertNewsArticle(newsAPIResponse),
        ...convertNewsArticle(nyTimesResponse),
        ...convertNewsArticle(guardianAPIResponse),
      ];

      setData(allArticles);
      setError(null);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};

export default useApi;
