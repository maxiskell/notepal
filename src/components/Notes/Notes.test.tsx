import React from "react";
import { render } from "@testing-library/react";

import Notes from "./Notes";

test("renders app title", () => {
  const { getByText } = render(<Notes />);
  const title = getByText(/Notes/i);
  expect(title).toBeInTheDocument();
});
