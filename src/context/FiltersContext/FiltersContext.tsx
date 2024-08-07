import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { filtersInitialValues } from "./initialValues";
import { Article, Filters } from "../../types";
import { fetchArticles as fetchNewsAPIArticles } from "../../service/newsAPI";
import { fetchArticles as fetchNYTimesArticles } from "../../service/nyTimesAPI";
import { convertNewsArticle } from "../../utils/helpers";
import useApi from "../../hooks/useApi";

type ContextActions = {
  updateFilters: (values: Filters) => void;
};

type FiltersContextValues = {
  filters: Filters;
  articles: Article[];
  loading: boolean;
  actions: ContextActions;
};

const FiltersContext = createContext<FiltersContextValues>({
  filters: filtersInitialValues,
  articles: [],
  loading: true,
  actions: {
    updateFilters: () => undefined,
  },
});

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  return context;
};

interface WrapperProps {
  children: ReactNode;
}

const ContextWrapper = memo((props: WrapperProps) => {
  const [filters, setFormData] = useState<Filters>({ ...filtersInitialValues });
  const [articles, setArticles] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  const updateFilters = useCallback((values: Filters) => {
    setFormData((prevState) => ({
      ...prevState,
      ...values,
    }));
  }, []);

  // const fetchAllArticles = async (query: string, filters: Filters) => {
  //   const defaultQuery = query || "general";
  //   const currentDate = filters.date || new Date().toISOString().split("T")[0];
  //   const category = filters.category || "";
  //   const source = filters.source || "";

  //   console.log(
  //     `Fetching articles with query: ${defaultQuery}, date: ${currentDate}, category: ${category}`
  //   );

  //   try {
  //     const [newsAPIResponse, nyTimesResponse] = await Promise.all([
  //       fetchNewsAPIArticles(defaultQuery, category, source),
  //       fetchNYTimesArticles(defaultQuery, category, currentDate, source),
  //     ]);

  //     const allArticles = [
  //       ...convertNewsArticle(newsAPIResponse.data.articles),
  //       ...convertNewsArticle(nyTimesResponse.data.response.docs),
  //     ];
  //     console.log("Fetched articles:", allArticles);
  //     setArticles(allArticles);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching articles:", error);
  //     setLoading(false);
  //   }
  // };

  const { data, loading, error } = useApi();

  console.log("Data:", data, "Loading:", loading, "Error:", error);

  // useEffect(() => {
  //   fetchAllArticles(filters.searchText, filters);
  // }, [filters]);

  const value = useMemo(
    () => ({
      filters,
      articles: data,
      loading,
      actions: { updateFilters },
    }),
    [filters, articles, loading, updateFilters]
  );

  return (
    <FiltersContext.Provider value={value}>
      {props.children}
    </FiltersContext.Provider>
  );
});

export default ContextWrapper;
