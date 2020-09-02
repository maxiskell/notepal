import React from "react";
import { render } from "@testing-library/react";

import List from "./List";

const mockNotes = [
  {
    id: 1,
    title: "First Note",
    content: "Test Content",
  },
  {
    id: 2,
    title: "Another Note",
    content: "Some meaningless Content",
  },
];

test("render properly", () => {
  const { container } = render(<List notes={mockNotes} />);

  expect(container).toMatchSnapshot();
});

test("render all given notes", () => {
  const { getByText } = render(<List notes={mockNotes} />);

  expect(getByText(/First Note/)).toBeInTheDocument();
  expect(getByText(/Test Content/)).toBeInTheDocument();
  expect(getByText(/Another Note/)).toBeInTheDocument();
  expect(getByText(/Some meaningless Content/)).toBeInTheDocument();
});
