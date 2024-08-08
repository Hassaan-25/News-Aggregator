import React from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import DebouncedInput from "../../components/common/DebouncedInput";
import { Box } from "@chakra-ui/react";

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
    <>
      <Box display="flex" flexDirection={"column"} gap={2}>
        <label
          htmlFor="category"
          style={{
            fontSize: "14px",
            color: "black",
          }}
        >
          Enter Keyword
        </label>
        <DebouncedInput
          value={searchText}
          onChange={handleSearch}
          placeholder="Search for articles..."
        />
      </Box>
    </>
  );
};

export default SearchBar;
