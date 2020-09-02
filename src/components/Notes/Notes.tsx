import React from "react";
import { connect } from "react-redux";

import { INote } from "../../redux/types";
import { IAppState } from "../../redux/Store";
import {
  addNote,
  updateNote,
  openEditor,
  closeEditor,
  NoteAction,
} from "../../redux/actions";

import Header from "./Header";
import Editor from "./Editor";
import List from "./List";

export interface INotesProps {
  notes: INote[];
  editorOpen: boolean;
  currentNoteId: number | null;
  addNote: (note: INote) => NoteAction;
  updateNote: (note: INote) => NoteAction;
  closeEditor: () => NoteAction;
  openEditor: (noteId: number | null) => NoteAction;
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
            ? props.notes.find(({ id }) => id === props.currentNoteId)
            : undefined
        }
      />
    )}

    {!props.editorOpen && props.notes.length > 0 && (
      <List notes={props.notes} edit={(id: number) => props.openEditor(id)} />
    )}
  </div>
);

const mapStateToProps = (store: IAppState) => ({
  notes: store.noteState.notes,
  currentNoteId: store.noteState.currentNoteId,
  editorOpen: store.noteState.editorOpen,
});

const mapDispatchToProps = {
  addNote,
  updateNote,
  openEditor,
  closeEditor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
