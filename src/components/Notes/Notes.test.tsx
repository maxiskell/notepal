import React from "react";
import { render } from "@testing-library/react";

import { Notes, INotesProps } from "./Notes";
import { openEditor, closeEditor } from "../../redux/actions";

test("renders properly", () => {
  const props: INotesProps = {
    notes: [],
    editorOpen: false,
    closeEditor,
    openEditor,
  };
  const { container } = render(<Notes {...props} />);
  expect(container).toMatchSnapshot();
});

test("renders app title", () => {
  const props: INotesProps = {
    notes: [],
    editorOpen: false,
    closeEditor,
    openEditor,
  };
  const { getByText } = render(<Notes {...props} />);
  const title = getByText(/Notes/i);
  expect(title).toBeInTheDocument();
});

test("not render editor if corresponding prop is false", () => {
  const props: INotesProps = {
    notes: [],
    editorOpen: false,
    closeEditor,
    openEditor,
  };

  const { queryAllByText } = render(<Notes {...props} />);
  const title = queryAllByText(/Title/i);
  const content = queryAllByText(/Content/i);
  expect(title).toHaveLength(0);
  expect(content).toHaveLength(0);
});

test("render editor if corresponding prop is true", () => {
  const props: INotesProps = {
    notes: [],
    editorOpen: true,
    closeEditor,
    openEditor,
  };

  const { getByText } = render(<Notes {...props} />);
  const title = getByText(/Title/i);
  const content = getByText(/Content/i);
  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
});
