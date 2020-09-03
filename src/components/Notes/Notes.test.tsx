import React from "react";
import { render } from "@testing-library/react";

import { Notes, INotesProps } from "./Notes";
import { INote } from "../../redux/types";

const mockProps: INotesProps = {
  notes: new Map<string, INote>(),
  editorOpen: false,
  addNote: jest.fn(),
  updateNote: jest.fn(),
  closeEditor: jest.fn(),
  openEditor: jest.fn(),
  currentNoteId: null,
};

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

test("renders properly", () => {
  const { container } = render(<Notes {...mockProps} />);
  expect(container).toMatchSnapshot();
});

test("not render editor if corresponding prop is false", () => {
  const { queryByTestId } = render(<Notes {...mockProps} />);

  expect(queryByTestId("note-editor")).toBeFalsy();
});

test("render editor if corresponding prop is true", () => {
  const props: INotesProps = {
    ...mockProps,
    editorOpen: true,
  };
  const { getByTestId } = render(<Notes {...props} />);

  expect(getByTestId("note-editor")).toBeInTheDocument();
});

test("not render note list if editor is open", () => {
  const props: INotesProps = {
    ...mockProps,
    editorOpen: true,
    notes: mockNotes,
  };

  const { queryByTestId } = render(<Notes {...props} />);

  expect(queryByTestId("note-list")).toBeFalsy();
});

test("not render note list if no notes present", () => {
  const { queryByTestId } = render(<Notes {...mockProps} />);

  expect(queryByTestId("note-list")).toBeFalsy();
});

test("render note list if editor is closed and there are notes present", () => {
  const props: INotesProps = {
    ...mockProps,
    notes: mockNotes,
  };
  const { getByTestId } = render(<Notes {...props} />);

  expect(getByTestId("note-list")).toBeInTheDocument();
});
