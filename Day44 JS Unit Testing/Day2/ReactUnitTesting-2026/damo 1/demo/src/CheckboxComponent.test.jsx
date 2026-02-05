import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CheckboxWithLabel from "./CheckboxWithLabel";

describe("Test Checkbox Component", () => {
  test("Initial Render", () => {
    render(<CheckboxWithLabel labelOff="OFF" labelOn="ON" />);
    let lableElement = screen.getByText(/OFF/i);
    expect(lableElement).toBeInTheDocument();
  });

  test("Test render after user Event", () => {
    render(<CheckboxWithLabel labelOff="OFF" labelOn="ON" />);
    fireEvent.click(screen.getByLabelText(/OFF/i));
    let lableElement = screen.getByText(/ON/i);
    expect(lableElement).toBeInTheDocument();
  });
});
