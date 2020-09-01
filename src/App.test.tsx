import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders app title", () => {
  const { getByText } = render(<App />);
  const title = getByText(/Notes/i);
  expect(title).toBeInTheDocument();
});