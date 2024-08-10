import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DebouncedInput from "./DebouncedInput";

jest.mock("lodash", () => ({
  debounce: (fn: any) => {
    return fn;
  },
}));

describe("DebouncedInput", () => {
  it("renders the input with the correct initial value", () => {
    render(<DebouncedInput value="initial value" onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue("initial value");
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange with the new value after debounce", async () => {
    const handleChange = jest.fn();
    render(<DebouncedInput value="" onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "new value" } });

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith("new value");
    });
  });

  it("disables the input when isDisabled is true", () => {
    render(<DebouncedInput value="" onChange={() => {}} isDisabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });

  it("renders with the correct placeholder", () => {
    render(
      <DebouncedInput value="" onChange={() => {}} placeholder="Enter text" />
    );
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("sets input as required when isRequired is true", () => {
    render(<DebouncedInput value="" onChange={() => {}} isRequired />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeRequired();
  });
});
