import { Box } from "@chakra-ui/react";
import SourceDropdown from "../SourceDropdown";
import SearchInput from "../SearchInput/SearchInput";
import CategoryDropdown from "../CategoryDropdown";
import DatePicker from "../DatePicker";

const FilterBar = () => {
  return (
    <Box display="flex" flexDirection={["column", "row"]} gap={8}>
      <SearchInput />
      <CategoryDropdown />
      <SourceDropdown />
      <DatePicker />
    </Box>
  );
};

export default FilterBar;
