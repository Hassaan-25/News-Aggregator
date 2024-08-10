import { useState, useCallback } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { FormLabel, Box, Button } from "@chakra-ui/react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "./DatePicker.css";

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
        date: value ? value.format("YYYY-MM-DD") : "",
      });
    },
    [updateFilters, filters]
  );

  const isOutsideRange = (day: moment.Moment) => {
    return day.isAfter(moment(), "day");
  };

  const clearDate = () => {
    updateFilters({
      ...filters,
      date: "",
    });
  };

  return (
    <Box display="flex" flexDirection={"column"}>
      <FormLabel>Select Date:</FormLabel>
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
        <Button onClick={clearDate} mt={2} size="sm" colorScheme="red">
          Clear Date
        </Button>
      )}
    </Box>
  );
};

export default DatePicker;
