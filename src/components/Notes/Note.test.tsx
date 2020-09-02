import React from "react";
import { render } from "@testing-library/react";
import Note from "./Note";

const mockNote = {
  id: 1,
  title: "Test Note",
  content: "Test Content",
};

test("render properly", () => {
  const { container } = render(<Note {...mockNote} />);

  expect(container).toMatchSnapshot();
});
