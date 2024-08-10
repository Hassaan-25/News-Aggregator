import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { filtersInitialValues } from "./initialValues";
import { Article, Filters } from "../../types";
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

  const updateFilters = useCallback((values: Filters) => {
    setFormData((prevState) => ({
      ...prevState,
      ...values,
    }));
  }, []);

  const { data, loading, error } = useApi(filters);

  useEffect(() => {
    console.log("filters Val", data);
  }, [data]);

  const value = useMemo(
    () => ({
      filters,
      articles: data,
      loading,
      actions: { updateFilters },
    }),
    [filters, data, loading, updateFilters]
  );

  return (
    <FiltersContext.Provider value={value}>
      {props.children}
    </FiltersContext.Provider>
  );
});

export default ContextWrapper;
