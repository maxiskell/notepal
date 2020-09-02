import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Editor from "./Editor";
import { closeEditor } from "../../redux/actions";

test("renders properly", () => {
  const { container } = render(<Editor close={closeEditor} />);
  expect(container).toMatchSnapshot();
});

test("cancel button calls close function", async () => {
  const mockClose = jest.fn();
  const { getByText } = render(<Editor close={mockClose} />);
  fireEvent.click(getByText(/Cancel/i));
  expect(mockClose).toHaveBeenCalledTimes(1);
});
