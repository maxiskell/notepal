import React from "react";
import { render } from "@testing-library/react";

import { Notes, INotesProps } from "./Notes";

const mockProps: INotesProps = {
  notes: [],
  editorOpen: false,
  addNote: jest.fn(),
  closeEditor: jest.fn(),
  openEditor: jest.fn(),
};

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
    notes: [
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
    ],
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
    notes: [
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
    ],
  };
  const { getByTestId } = render(<Notes {...props} />);

  expect(getByTestId("note-list")).toBeInTheDocument();
});
