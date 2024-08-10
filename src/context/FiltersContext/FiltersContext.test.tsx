import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useFiltersContext, default as ContextWrapper } from "./FiltersContext";
import { filtersInitialValues } from "./initialValues";

jest.mock("../../hooks/useApi", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    data: [],
    loading: false,
    error: null,
  }),
}));

describe("FiltersContext", () => {
  const TestComponent = () => {
    const { filters, articles, loading, actions } = useFiltersContext();
    return (
      <div>
        <div data-testid="filters">{JSON.stringify(filters)}</div>
        <div data-testid="articles">{JSON.stringify(articles)}</div>
        <div data-testid="loading">{loading.toString()}</div>
        <button
          onClick={() =>
            actions.updateFilters({
              ...filtersInitialValues,
              searchText: "test",
            })
          }
        >
          Update Filters
        </button>
      </div>
    );
  };

  it("provides the correct default values", () => {
    render(
      <ContextWrapper>
        <TestComponent />
      </ContextWrapper>
    );

    const filtersElement = screen.getByTestId("filters");
    expect(filtersElement.textContent).toBe(
      JSON.stringify(filtersInitialValues)
    );

    const articlesElement = screen.getByTestId("articles");
    expect(articlesElement.textContent).toBe(JSON.stringify([]));

    const loadingElement = screen.getByTestId("loading");
    expect(loadingElement.textContent).toBe("false");
  });

  it("updates filters correctly when updateFilters is called", () => {
    render(
      <ContextWrapper>
        <TestComponent />
      </ContextWrapper>
    );

    const updateButton = screen.getByText("Update Filters");
    fireEvent.click(updateButton);

    const filtersElement = screen.getByTestId("filters");
    expect(filtersElement.textContent).toContain('"searchText":"test"');
  });
});
