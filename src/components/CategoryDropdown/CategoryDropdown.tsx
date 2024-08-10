import React, { useCallback } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { FormLabel, Select, Box } from "@chakra-ui/react";

const CategoryDropdown = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();

  const handleCategoryChange = useCallback(
    (event: any) => {
      updateFilters({
        ...filters,
        category: event.target.value,
      });
    },
    [updateFilters, filters]
  );

  return (
    <Box display="flex" flexDirection={"column"}>
      <FormLabel>Pick a Category:</FormLabel>
      <Select
        placeholder="All Categories"
        value={filters.category}
        onChange={handleCategoryChange}
        size={"lg"}
        width={["100%", "200px"]}
        background={"white"}
        color="black"
      >
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </Select>
    </Box>
  );
};

export default CategoryDropdown;
