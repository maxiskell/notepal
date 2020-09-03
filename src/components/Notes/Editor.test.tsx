import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Editor, { IEditorProps } from "./Editor";
import { INote } from "../../redux/types";

const props: IEditorProps = {
  save: jest.fn(),
  close: jest.fn(),
  delete: jest.fn(),
};

test("renders properly", () => {
  const { container } = render(<Editor {...props} />);

  expect(container).toMatchSnapshot();
});

test("cancel button calls close function", () => {
  const mockClose = jest.fn();
  const { getByTestId } = render(<Editor {...props} close={mockClose} />);

  fireEvent.click(getByTestId("note-editor-cancel"));

  expect(mockClose).toHaveBeenCalledTimes(1);
});

test("save button does not call save function when input is invalid", () => {
  const mockSave = jest.fn();
  const { getByTestId } = render(<Editor {...props} save={mockSave} />);

  fireEvent.click(getByTestId("note-editor-save"));

  expect(mockSave).toHaveBeenCalledTimes(0);
});

test("save button calls save function when input is valid", () => {
  const mockSave = jest.fn();
  const { getByTestId } = render(<Editor {...props} save={mockSave} />);

  fireEvent.change(getByTestId("note-editor-title"), {
    target: { value: "Test Title" },
  });

  fireEvent.change(getByTestId("note-editor-content"), {
    target: { value: "Test Content" },
  });

  fireEvent.click(getByTestId("note-editor-save"));

  expect(mockSave).toHaveBeenCalledTimes(1);
});

test("not show delete button if no note given", () => {
  const { queryByTestId } = render(<Editor {...props} />);

  expect(queryByTestId("note-editor-delete")).toBeFalsy();
});

test("delete button calls delete function", () => {
  const mockDelete = jest.fn();
  const mockNote: INote = {
    title: "Test Note",
    content: "Test Content",
  };

  const { getByTestId } = render(
    <Editor {...props} note={mockNote} delete={mockDelete} />
  );

  const deleteButton = getByTestId("note-editor-delete");

  expect(deleteButton).toBeInTheDocument();

  fireEvent.click(deleteButton);

  expect(mockDelete).toHaveBeenCalledTimes(1);
});

test("fill input with given note data", () => {
  const mockNote: INote = {
    title: "Test Note",
    content: "Test Content",
  };

  const { getByTestId } = render(<Editor {...props} note={mockNote} />);

  expect(getByTestId("note-editor-title")).toBeInTheDocument();
  expect(getByTestId("note-editor-title")).toHaveValue("Test Note");

  expect(getByTestId("note-editor-content")).toBeInTheDocument();
  expect(getByTestId("note-editor-content")).toHaveValue("Test Content");
});
