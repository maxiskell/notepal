import React from "react";
import { connect } from "react-redux";

import { INote } from "../../redux/types";
import { IAppState } from "../../redux/Store";
import { openEditor, closeEditor, NoteAction } from "../../redux/actions";

import Header from "./Header";
import Editor from "./Editor";

interface INotesProps {
  notes: INote[];
  editorOpen: boolean;
  closeEditor: () => NoteAction;
  openEditor: (noteId: number | null) => NoteAction;
}

const Notes: React.FC<INotesProps> = (props) => (
  <div className="container">
    <Header
      newNote={() => props.openEditor(null)}
      isEditorOpen={props.editorOpen}
    />

    {props.editorOpen && <Editor close={props.closeEditor} />}
  </div>
);

const mapStateToProps = (store: IAppState) => ({
  notes: store.noteState.notes,
  editorOpen: store.noteState.editorOpen,
});

const mapDispatchToProps = {
  openEditor,
  closeEditor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);