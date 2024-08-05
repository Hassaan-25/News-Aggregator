import {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { filtersInitialValues } from "./initialValues";

export interface Filters {
  searchText: string;
  category: string;
  date: string;
}
type ContextActions = {
  updateFilters: (values: any) => void;
};

type FiltersContextValues = {
  filters: Filters;
  actions: ContextActions;
};

const FiltersContext = createContext<FiltersContextValues>({
  filters: filtersInitialValues,
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
  const [filters, setFormData] = useState({ ...filtersInitialValues });

  const updateFilters = useCallback((values: Filters) => {
    setFormData((prevState) => ({
      ...prevState,
      ...values,
    }));
  }, []);

  const value = useMemo(
    () => ({
      filters,
      actions: { updateFilters },
    }),
    [filters, updateFilters]
  );

  return (
    <FiltersContext.Provider value={value}>
      {props.children}
    </FiltersContext.Provider>
  );
});

export default ContextWrapper;
