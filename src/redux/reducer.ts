import { Reducer } from "redux";

import { INoteState } from "./types";
import { NoteActions, NoteActionTypes } from "./actions";

const initialState: INoteState = {
  notes: [],
};

export const noteReducer: Reducer<INoteState, NoteActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case NoteActionTypes.ADD:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
};
