import "./test/matchMedia.mock";

import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Hola soy el Header/i);
  expect(headerElement).toBeInTheDocument();
});
