import React from "react";
import { render } from "@testing-library/react";

import List from "./List";
import { INote } from "../../redux/types";

const mockNotes = new Map<string, INote>([
  [
    "abc",
    {
      title: "First Note",
      content: "Test Content",
    },
  ],
  [
    "xyz",
    {
      title: "Another Note",
      content: "Some meaningless Content",
    },
  ],
]);

test("render properly", () => {
  const { container } = render(<List edit={jest.fn()} notes={mockNotes} />);

  expect(container).toMatchSnapshot();
});

test("render all given notes", () => {
  const { getByTestId } = render(<List edit={jest.fn()} notes={mockNotes} />);

  expect(getByTestId("note-abc")).toBeInTheDocument();
  expect(getByTestId("note-xyz")).toBeInTheDocument();
});
