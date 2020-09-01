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
        notes: [...state.notes, action.payload],
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
