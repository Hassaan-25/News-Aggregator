import { useState, useCallback } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { FormLabel, Box, Button } from "@chakra-ui/react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { isOutsideRange } from "../../utils/helpers";
import "./DatePicker.css";
import { Colors } from "../../constants/colors";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

const DatePicker = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();
  const [focused, setFocused] = useState(false);

  const handleDateChange = useCallback(
    (value?: moment.Moment | null) => {
      updateFilters({
        ...filters,
        date: value ? value.format(DEFAULT_DATE_FORMAT) : "",
      });
    },
    [updateFilters, filters]
  );

  const clearDate = useCallback(() => {
    updateFilters({
      ...filters,
      date: "",
    });
  }, [filters, updateFilters]);

  return (
    <Box display="flex" flexDirection={"column"}>
      <FormLabel>From Date:</FormLabel>
      <Box position="relative">
        <SingleDatePicker
          date={filters.date ? moment(filters.date) : null}
          onDateChange={handleDateChange}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          isOutsideRange={isOutsideRange}
          id="date_picker"
          numberOfMonths={1}
          displayFormat="YYYY-MM-DD"
        />
        {filters.date && (
          <Button
            onClick={clearDate}
            size="md"
            variant="unstyled"
            color={Colors.black}
            position="absolute"
            top="50%"
            right={["3px", "5px"]}
            transform="translateY(-50%)"
            zIndex="10"
            _hover={{ background: "none" }}
          >
            &times;
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DatePicker;
