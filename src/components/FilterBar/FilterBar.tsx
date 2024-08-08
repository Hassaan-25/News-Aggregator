import React, { useEffect, useState } from "react";
import { useFiltersContext } from "../../context/FiltersContext";
import { Select, Box } from "@chakra-ui/react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import "../../App.css";

const FilterBar = () => {
  const {
    filters,
    actions: { updateFilters },
  } = useFiltersContext();
  const [category, setCategory] = useState(filters.category);
  const [date, setDate] = useState(filters.date ? moment(filters.date) : null);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    updateFilters({
      ...filters,
      category,
      date: date ? date.format("YYYY-MM-DD") : "",
    });
  }, [category, date, updateFilters, filters]);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={["row-reverse", "row"]}
      gap={4}
    >
      <Box display="flex" flexDirection={"column"} gap={2}>
        <label
          htmlFor="category"
          style={{
            fontSize: "14px",
            color: "black",
          }}
        >
          Pick a Category:
        </label>
        <Select
          placeholder="All Categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size={"lg"}
          width={["150px", "300px"]}
          background={"white"}
          color={category === "" ? "#718096" : "initial"}
        >
          <option value="technology">Technology</option>
          <option value="business">Business</option>
          <option value="sports">Sports</option>
        </Select>
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        gap={2}
        width={["150px", "200px"]}
        borderRadius={10}
        zIndex={10}
      >
        <label
          htmlFor="date_picker"
          style={{
            fontSize: "14px",
            color: "black",
          }}
        >
          Date:
        </label>
        <SingleDatePicker
          date={date}
          onDateChange={(date) => setDate(date)}
          focused={focused}
          onFocusChange={({ focused }) => setFocused(focused)}
          id="date_picker"
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="YYYY-MM-DD"
        />
      </Box>
    </Box>
  );
};

export default FilterBar;
