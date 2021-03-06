import React from "react";
import { render } from "@testing-library/react";
import Note from "./Note";

const mockNote = {
  id: "abc",
  title: "Test Note",
  content: "Test Content",
  edit: jest.fn(),
};

test("render properly", () => {
  const { container } = render(<Note {...mockNote} />);

  expect(container).toMatchSnapshot();
});
