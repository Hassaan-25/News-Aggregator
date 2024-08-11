import { useCallback } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { FormLabel, Select, Box } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";

const CategoryDropdown = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();

  const handleCategoryChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        background={Colors.white}
        color={Colors.black}
      >
        <option value="technology">Technology</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </Select>
    </Box>
  );
};

export default CategoryDropdown;
