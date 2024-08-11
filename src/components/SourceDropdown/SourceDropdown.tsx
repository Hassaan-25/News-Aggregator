import { useCallback } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { FormLabel, Select, Box } from "@chakra-ui/react";
import { Colors } from "../../constants/colors";

const SourceDropdown = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();

  const handleSourceChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      updateFilters({
        ...filters,
        source: event.target.value,
      });
    },
    [updateFilters, filters]
  );

  return (
    <Box display="flex" flexDirection={"column"}>
      <FormLabel>Pick a Source:</FormLabel>
      <Select
        placeholder="All Sources"
        value={filters.source}
        onChange={handleSourceChange}
        size={"lg"}
        width={["100%", "200px"]}
        background={Colors.white}
        color={Colors.black}
      >
        <option value="wired">Wired</option>
        <option value="the-verge">The Verge</option>
        <option value="techcrunch">TechCrunch</option>
        <option value="cnn">CNN</option>
      </Select>
    </Box>
  );
};

export default SourceDropdown;
