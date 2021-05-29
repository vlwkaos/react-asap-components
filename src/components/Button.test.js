import { render, getByText, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "components/Button";

describe("Button", () => {
  test("should display text", () => {
    const { container } = render(<Button text="TEST1234" />);

    getByText(container, "TEST1234");
  });
  
  test("should handle click events", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button text="Click me, maybe?" onClick={onClickMock} />
    );
    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
  });
  
  test("should make text uppercase", () => {
    const { container } = render(<Button text="Test1234" />);
    const component = getByText(container, "Test1234");

    expect(component).toHaveStyleRule("text-transform", "uppercase");
  });
});
