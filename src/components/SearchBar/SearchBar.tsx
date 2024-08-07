import React from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import DebouncedInput from "../../components/common/DebouncedInput";

const SearchBar = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();
  const { searchText } = filters;

  const handleSearch = (value: string) => {
    updateFilters({ ...filters, searchText: value });
  };

  return (
    <DebouncedInput
      value={searchText}
      onChange={handleSearch}
      placeholder="Search for articles..."
    />
  );
};

export default SearchBar;
