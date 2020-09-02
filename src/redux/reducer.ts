import { Reducer } from "redux";

import { INoteState } from "./types";
import { NoteAction, NoteActionTypes } from "./actions";

const noteList = [
  {
    id: 1,
    title: "The first one",
    content:
      "Vivamus quis scelerisque lectus. Aliquam erat volutpat. Quisque vestibulum leo a velit blandit, ac porttitor elit faucibus. Vivamus eu sem pharetra, euismod mauris lobortis, finibus nisl.",
  },
  {
    id: 2,
    title: "The second one",
    content:
      "Sed porta sem ut augue rhoncus auctor. Duis erat ante, venenatis at lectus in, scelerisque tempor dolor. Vivamus massa mauris, bibendum et neque ut, tincidunt luctus risus. Nam lobortis ante sed purus faucibus lobortis. Phasellus faucibus ex orci, nec tincidunt sapien hendrerit eget. ",
  },
  {
    id: 3,
    title: "The second one",
    content: "shortie",
  },
];

const initialState: INoteState = {
  // notes: [],
  notes: noteList,
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
