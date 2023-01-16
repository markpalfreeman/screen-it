import { render, screen } from "@testing-library/react";
import { App } from "./";

test("renders heading element", () => {
  render(<App />);
  const heading = screen.getByText("Screen it");
  expect(heading).toBeInTheDocument();
});
