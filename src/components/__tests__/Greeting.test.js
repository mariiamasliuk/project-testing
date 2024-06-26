import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "../Greeting";

describe("Greeting component", () => {
  test("render Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getAllByText("It's good");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act!
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getAllByText("day", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("good to see you was NOT rendered if if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act!
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getAllByText("It's good", { exact: false });
    expect(outputElement).toBeNull();
  });
});
