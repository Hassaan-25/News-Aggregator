import React from "react";
import { Filters } from "../../pages/Home/Home";

interface FilterProps {
  onFilter: (filterOptions: Filters) => void;
}

const FilterBar = (props: FilterProps) => {
  const [category, setCategory] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleFilter = () => {
    props.onFilter({ category, date });
  };

  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;
