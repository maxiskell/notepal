import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Editor from "./Editor";

test("renders properly", () => {
  const mockClose = jest.fn();
  const { container } = render(<Editor close={mockClose} />);

  expect(container).toMatchSnapshot();
});

test("cancel button calls close function", async () => {
  const mockClose = jest.fn();
  const { getByText } = render(<Editor close={mockClose} />);

  fireEvent.click(getByText(/Cancel/i));

  expect(mockClose).toHaveBeenCalledTimes(1);
});
