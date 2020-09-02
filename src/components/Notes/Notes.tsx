import React from "react";
import { connect } from "react-redux";

import { INote } from "../../redux/types";
import { IAppState } from "../../redux/Store";
import {
  addNote,
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
  addNote: (note: INote) => NoteAction;
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
      <Editor close={props.closeEditor} save={props.addNote} />
    )}

    {!props.editorOpen && props.notes.length > 0 && (
      <List notes={props.notes} />
    )}
  </div>
);

const mapStateToProps = (store: IAppState) => ({
  notes: store.noteState.notes,
  editorOpen: store.noteState.editorOpen,
});

const mapDispatchToProps = {
  addNote,
  openEditor,
  closeEditor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
