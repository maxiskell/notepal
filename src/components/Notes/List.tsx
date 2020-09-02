import React from "react";

import { INote } from "../../redux/types";
import Note from "./Note";

interface IListProps {
  notes: INote[];
}

const List: React.FC<IListProps> = ({ notes }) => (
  <div className="container" data-testid="note-list">
    {notes.map((note) => (
      <Note key={note.id} {...note} />
    ))}
  </div>
);

export default List;
