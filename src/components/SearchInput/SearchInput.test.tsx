import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchInput from "./SearchInput";
import { useFiltersContext } from "../../context/FiltersContext";

// Mock the useFiltersContext
jest.mock("../../context/FiltersContext");
// Mock the DebouncedInput component to simplify testing
jest.mock("../common/DebouncedInput", () =>
  jest.fn(({ value, onChange, placeholder }) => (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  ))
);

describe("SearchInput", () => {
  const mockUpdateFilters = jest.fn();
  const mockFilters = {
    searchText: "initial search",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useFiltersContext as jest.Mock).mockReturnValue({
      filters: mockFilters,
      actions: { updateFilters: mockUpdateFilters },
    });
  });

  it("renders the SearchInput component", () => {
    render(<SearchInput />);

    const searchLabel = screen.getByText("Enter Keyword:");
    expect(searchLabel).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("Search for articles...");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("initial search");
  });

  it("calls updateFilters when the input value changes", () => {
    render(<SearchInput />);

    const inputElement = screen.getByPlaceholderText("Search for articles...");

    // Simulate user typing in the input
    fireEvent.change(inputElement, { target: { value: "new search term" } });

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      ...mockFilters,
      searchText: "new search term",
    });
  });

  it("handles an empty search input correctly", () => {
    render(<SearchInput />);

    const inputElement = screen.getByPlaceholderText("Search for articles...");

    // Simulate user clearing the input
    fireEvent.change(inputElement, { target: { value: "" } });

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      ...mockFilters,
      searchText: "",
    });
  });
});
