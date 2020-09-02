import { Reducer } from "redux";

import { INoteState } from "./types";
import { NoteAction, NoteActionTypes } from "./actions";

const initialState: INoteState = {
  notes: [],
  editorOpen: false,
  currentNoteId: null,
};

export const noteReducer: Reducer<INoteState, NoteAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NoteActionTypes.ADD:
      return {
        ...state,
        editorOpen: false,
        notes: [
          ...state.notes,
          { id: state.notes.length + 1, ...action.payload },
        ],
      };
    case NoteActionTypes.UPDATE:
      let notes = state.notes;
      notes[state.currentNoteId! - 1] = action.payload;
      return {
        ...state,
        notes,
        editorOpen: false,
      };
    case NoteActionTypes.OPEN_EDITOR:
      return {
        ...state,
        editorOpen: true,
        currentNoteId: action.payload,
      };
    case NoteActionTypes.CLOSE_EDITOR:
      return {
        ...state,
        editorOpen: false,
        currentNoteId: null,
      };
    default:
      return state;
  }
};
