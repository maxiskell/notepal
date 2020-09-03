import React from "react";

import { INote } from "../../redux/types";
import Note from "./Note";
import { NoteAction } from "../../redux/actions";

interface IListProps {
  notes: Map<string, INote>;
  edit: (id: string) => NoteAction;
}
const List: React.FC<IListProps> = ({ edit, notes }) => (
  <div className="container" data-testid="note-list">
    {[...notes.keys()].map((id) => (
      <Note
        key={id}
        edit={edit}
        id={id}
        title={notes.get(id)!.title}
        content={notes.get(id)!.content}
      />
    ))}
  </div>
);

export default List;
