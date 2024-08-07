import React, { useEffect, useState } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { Select, Box, Input } from "@chakra-ui/react";

const FilterBar = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();
  const [category, setCategory] = useState(filters.category);
  const [date, setDate] = useState(filters.date);

  useEffect(() => {
    updateFilters({ ...filters, category, date });
  }, [category, date]);

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Select
        placeholder="All Categories"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </Select>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </Box>
  );
};

export default FilterBar;
