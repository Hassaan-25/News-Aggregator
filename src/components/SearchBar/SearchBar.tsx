import React from "react";
import DebouncedInput from "../../components/common/DebouncedInput";
import { useFiltersContext } from "../../context/FiltersContext";

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { onSearch } = props;
  const {
    filters: { searchText },
  } = useFiltersContext();

  return (
    <div>
      <DebouncedInput
        value={searchText}
        onChange={(value: string) => onSearch(value)}
        placeholder="Search for articles..."
      />
    </div>
  );
};

export default SearchBar;
