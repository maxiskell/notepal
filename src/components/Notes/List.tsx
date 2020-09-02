import React from "react";

import { INote } from "../../redux/types";
import Note from "./Note";
import { NoteAction } from "../../redux/actions";

interface IListProps {
  notes: INote[];
  edit: (id: number) => NoteAction;
}

const List: React.FC<IListProps> = ({ edit, notes }) => (
  <div className="container" data-testid="note-list">
    {notes.map((note) => (
      <Note key={note.id} edit={edit} id={note.id!} {...note} />
    ))}
  </div>
);

export default List;
