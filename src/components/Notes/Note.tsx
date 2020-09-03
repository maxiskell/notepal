import React from "react";

import { INote } from "../../redux/types";
import { NoteAction } from "../../redux/actions";

export interface INoteProps extends INote {
  id: string;
  edit: (id: string) => NoteAction;
}

const Note: React.FC<INoteProps> = (props) => (
  <div
    className="card w-100 mt-4"
    style={{ cursor: "pointer" }}
    title="Click to edit"
    onClick={() => props.edit(props.id)}
    data-testid={`note-${props.id}`}
  >
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>
        {props.content}
      </p>
    </div>
  </div>
);

export default Note;
