import { Reducer } from "redux";
import { v4 as uuid } from "uuid";

import { INoteState, INote } from "./types";
import { NoteAction, NoteActionTypes } from "./actions";

const initialState: INoteState = {
  notes: new Map() as Map<string, INote>,
  editorOpen: false,
  currentNoteId: null,
};

export const noteReducer: Reducer<INoteState, NoteAction> = (
  state = initialState,
  action
) => {
  let notes = state.notes;

  switch (action.type) {
    case NoteActionTypes.ADD:
      notes.set(uuid(), action.payload);

      return {
        ...state,
        editorOpen: false,
        notes,
      };
    case NoteActionTypes.UPDATE:
      notes.set(state.currentNoteId!, action.payload);

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
