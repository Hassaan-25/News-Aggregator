import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SourceDropdown from "./SourceDropdown";
import { useFiltersContext } from "../../context/FiltersContext";

jest.mock("../../context/FiltersContext");

describe("SourceDropdown", () => {
  it("renders the dropdown with the correct initial value", () => {
    const mockUpdateFilters = jest.fn();
    const mockContextValue = {
      filters: { source: "bbc" },
      actions: { updateFilters: mockUpdateFilters },
    };

    (useFiltersContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<SourceDropdown />);

    const selectElement = screen.getByDisplayValue("BBC");
    expect(selectElement).toBeInTheDocument();
  });

  it("calls updateFilters with the correct value when a new source is selected", () => {
    const mockUpdateFilters = jest.fn();
    const mockContextValue = {
      filters: { source: "" },
      actions: { updateFilters: mockUpdateFilters },
    };

    (useFiltersContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<SourceDropdown />);

    const selectElement = screen.getByRole("combobox");

    fireEvent.change(selectElement, { target: { value: "cnn" } });

    expect(mockUpdateFilters).toHaveBeenCalledWith({
      source: "cnn",
    });
  });

  it("renders the correct options in the dropdown", () => {
    const mockUpdateFilters = jest.fn();
    const mockContextValue = {
      filters: { source: "" },
      actions: { updateFilters: mockUpdateFilters },
    };

    (useFiltersContext as jest.Mock).mockReturnValue(mockContextValue);

    render(<SourceDropdown />);

    const allSourcesOption = screen.getByText("All Sources");
    const yahooOption = screen.getByText("Yahoo");
    const wiredOption = screen.getByText("Wired");
    const bbcOption = screen.getByText("BBC");
    const cnnOption = screen.getByText("CNN");
    const theguardianOption = screen.getByText("The Guardian");

    expect(allSourcesOption).toBeInTheDocument();
    expect(yahooOption).toBeInTheDocument();
    expect(wiredOption).toBeInTheDocument();
    expect(bbcOption).toBeInTheDocument();
    expect(cnnOption).toBeInTheDocument();
    expect(theguardianOption).toBeInTheDocument();
  });
});
