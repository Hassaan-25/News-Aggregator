import React, { useState, useCallback } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { FormLabel, Select, Box } from "@chakra-ui/react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "./DatePicker.css";

const DatePicker = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();
  const { searchText } = filters;
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

  return (
    <Box display="flex" flexDirection={"column"}>
      <FormLabel>Select Date:</FormLabel>
      <SingleDatePicker
        date={filters.date ? moment(filters.date) : null}
        onDateChange={handleDateChange}
        focused={focused}
        onFocusChange={({ focused }) => setFocused(focused)}
        id="date_picker"
        numberOfMonths={1}
        isOutsideRange={() => false}
        displayFormat="YYYY-MM-DD"
      />
    </Box>
  );
};

export default DatePicker;
