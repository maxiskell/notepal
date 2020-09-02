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
  const { container } = render(<List edit={jest.fn()} notes={mockNotes} />);

  expect(container).toMatchSnapshot();
});

test("render all given notes", () => {
  const { getByTestId } = render(<List edit={jest.fn()} notes={mockNotes} />);

  expect(getByTestId("note-1")).toBeInTheDocument();
  expect(getByTestId("note-2")).toBeInTheDocument();
});
