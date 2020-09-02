import { connect } from "react-redux";

import { IAppState } from "../../redux/Store";
import {
  addNote,
  updateNote,
  openEditor,
  closeEditor,
} from "../../redux/actions";

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

export default connect(mapStateToProps, mapDispatchToProps);
