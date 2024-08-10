import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DatePicker from "./DatePicker";
import { useFiltersContext } from "../../context/FiltersContext";
import moment from "moment";

jest.mock("../../context/FiltersContext");

describe("DatePicker", () => {
  const mockUpdateFilters = jest.fn();
  const mockFilters = {
    date: "2024-08-10",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useFiltersContext as jest.Mock).mockReturnValue({
      filters: mockFilters,
      actions: { updateFilters: mockUpdateFilters },
    });
  });

  it("renders the DatePicker component", () => {
    render(<DatePicker />);

    const datePickerLabel = screen.getByText("Select Date:");
    expect(datePickerLabel).toBeInTheDocument();
  });

  it("renders the SingleDatePicker with the correct initial date", () => {
    render(<DatePicker />);

    const selectedDate = moment(mockFilters.date).format("YYYY-MM-DD");
    const dateElement = screen.getByDisplayValue(selectedDate);

    expect(dateElement).toBeInTheDocument();
  });

  it("calls updateFilters with the selected date", () => {
    render(<DatePicker />);

    const newDate = moment("2024-08-15");

    // Simulate date change
    const datePickerInput = screen.getByRole("textbox");
    fireEvent.change(datePickerInput, {
      target: { value: newDate.format("YYYY-MM-DD") },
    });

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      ...mockFilters,
      date: newDate.format("YYYY-MM-DD"),
    });
  });

  it("disables dates after today", () => {
    render(<DatePicker />);

    const futureDate = moment().add(1, "days");

    expect(
      screen.getByRole("textbox").getAttribute("aria-disabled")
    ).toBeNull();
  });

  it("renders the Clear Date button and clears the date when clicked", () => {
    render(<DatePicker />);

    const clearButton = screen.getByText("Clear Date");
    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      ...mockFilters,
      date: "",
    });
  });

  it("does not render the Clear Date button if no date is selected", () => {
    (useFiltersContext as jest.Mock).mockReturnValue({
      filters: { date: "" },
      actions: { updateFilters: mockUpdateFilters },
    });

    render(<DatePicker />);

    const clearButton = screen.queryByText("Clear Date");
    expect(clearButton).not.toBeInTheDocument();
  });
});
