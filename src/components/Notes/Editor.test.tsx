import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Editor from "./Editor";

test("renders properly", () => {
  const { container } = render(<Editor save={jest.fn()} close={jest.fn()} />);

  expect(container).toMatchSnapshot();
});

test("cancel button calls close function", () => {
  const mockClose = jest.fn();
  const { getByTestId } = render(<Editor save={jest.fn()} close={mockClose} />);

  fireEvent.click(getByTestId("note-editor-cancel"));

  expect(mockClose).toHaveBeenCalledTimes(1);
});

test("save button does not call save function when input is invalid", () => {
  const mockSave = jest.fn();
  const { getByTestId } = render(<Editor save={mockSave} close={jest.fn()} />);

  fireEvent.click(getByTestId("note-editor-save"));

  expect(mockSave).toHaveBeenCalledTimes(0);
});

test("save button calls save function when input is valid", () => {
  const mockSave = jest.fn();
  const { getByTestId } = render(<Editor save={mockSave} close={jest.fn()} />);

  fireEvent.change(getByTestId("note-editor-title"), {
    target: { value: "Test Title" },
  });

  fireEvent.change(getByTestId("note-editor-content"), {
    target: { value: "Test Content" },
  });

  fireEvent.click(getByTestId("note-editor-save"));

  expect(mockSave).toHaveBeenCalledTimes(1);
});

test("fill input with given note data", () => {
  const { getByTestId } = render(<Editor save={jest.fn()} close={jest.fn()} />);

  expect(getByTestId("note-editor-title")).toBeInTheDocument();
  expect(getByTestId("note-editor-content")).toBeInTheDocument();
});
