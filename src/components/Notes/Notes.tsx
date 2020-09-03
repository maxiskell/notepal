import React from "react";

import connected from "./connected";
import { INote } from "../../redux/types";
import { NoteAction } from "../../redux/actions";

import Header from "./Header";
import Editor from "./Editor";
import List from "./List";

export interface INotesProps {
  notes: Map<string, INote>;
  editorOpen: boolean;
  currentNoteId: string | null;
  addNote: (note: INote) => NoteAction;
  updateNote: (note: INote) => NoteAction;
  closeEditor: () => NoteAction;
  openEditor: (noteId: string | null) => NoteAction;
}

export const Notes: React.FC<INotesProps> = (props) => (
  <div className="container">
    <Header
      newNote={() => props.openEditor(null)}
      isEditorOpen={props.editorOpen}
    />

    {props.editorOpen && (
      <Editor
        close={props.closeEditor}
        save={props.currentNoteId === null ? props.addNote : props.updateNote}
        note={
          props.currentNoteId !== null
            ? props.notes.get(props.currentNoteId)
            : undefined
        }
      />
    )}

    {!props.editorOpen && props.notes.size > 0 && (
      <List notes={props.notes} edit={(id: string) => props.openEditor(id)} />
    )}
  </div>
);

export default connected(Notes);
