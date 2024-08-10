import React from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import DebouncedInput from "../common/DebouncedInput";
import { Box, FormLabel } from "@chakra-ui/react";

const SearchInput = () => {
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
      <Box display="flex" flexDirection={"column"}>
        <FormLabel>Enter Keyword:</FormLabel>
        <DebouncedInput
          value={searchText}
          onChange={handleSearch}
          placeholder="Search for articles..."
        />
      </Box>
    </>
  );
};

export default SearchInput;
