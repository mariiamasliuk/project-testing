import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("render Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // ... nothing

  // Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: true });
  expect(helloWorldElement).toBeInTheDocument();
});
