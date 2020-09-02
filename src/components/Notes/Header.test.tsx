import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Header from "./Header";

const mockNewNote = jest.fn();

test("renders properly", () => {
  const { container } = render(
    <Header isEditorOpen={false} newNote={mockNewNote} />
  );

  expect(container).toMatchSnapshot();
});

test("renders app title", () => {
  const { getByText } = render(
    <Header isEditorOpen={false} newNote={mockNewNote} />
  );
  const title = getByText(/Notepal/i);

  expect(title).toBeInTheDocument();
});

test("render new editor button if editor is closed", () => {
  const { getByText } = render(
    <Header isEditorOpen={false} newNote={mockNewNote} />
  );
  const button = getByText(/New Note/i);

  expect(button).toBeInTheDocument();
});

test("not render new editor button if editor is open", () => {
  const { queryAllByText } = render(
    <Header isEditorOpen={true} newNote={mockNewNote} />
  );
  const button = queryAllByText(/New Note/i);

  expect(button).toHaveLength(0);
});

test("new note button calls corresponding function when clicked", () => {
  const { getByText } = render(
    <Header isEditorOpen={false} newNote={mockNewNote} />
  );
  fireEvent.click(getByText(/New Note/i));

  expect(mockNewNote).toHaveBeenCalledTimes(1);
});
