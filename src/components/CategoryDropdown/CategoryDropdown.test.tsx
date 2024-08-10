import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CategoryDropdown from "./CategoryDropdown";
import { useFiltersContext } from "../../context/FiltersContext";

jest.mock("../../context/FiltersContext");

describe("CategoryDropdown", () => {
  it("renders the dropdown with the correct initial value", () => {
    const mockUpdateFilters = jest.fn();
    const mockContextValue = {
      filters: { category: "technology", searchText: "" },
      actions: { updateFilters: mockUpdateFilters },
    };

    (useFiltersContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<CategoryDropdown />);

    const selectElement = screen.getByDisplayValue("Technology");
    expect(selectElement).toBeInTheDocument();
  });

  it("calls updateFilters with the correct value when a new category is selected", () => {
    const mockUpdateFilters = jest.fn();
    const mockContextValue = {
      filters: { category: "", searchText: "" },
      actions: { updateFilters: mockUpdateFilters },
    };

    (useFiltersContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<CategoryDropdown />);

    const selectElement = screen.getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "business" } });

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      category: "business",
      searchText: "",
    });
  });

  it("renders the correct options in the dropdown", () => {
    const mockUpdateFilters = jest.fn();
    const mockContextValue = {
      filters: { category: "", searchText: "" },
      actions: { updateFilters: mockUpdateFilters },
    };

    (useFiltersContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<CategoryDropdown />);

    const allCategoriesOption = screen.getByText("All Categories");
    const technologyOption = screen.getByText("Technology");
    const businessOption = screen.getByText("Business");
    const sportsOption = screen.getByText("Sports");

    expect(allCategoriesOption).toBeInTheDocument();
    expect(technologyOption).toBeInTheDocument();
    expect(businessOption).toBeInTheDocument();
    expect(sportsOption).toBeInTheDocument();
  });
});
