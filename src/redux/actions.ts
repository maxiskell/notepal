import { INote } from "./types";

export enum NoteActionTypes {
  ADD = "ADD_NOTE",
  OPEN_EDITOR = "OPEN_EDITOR",
  CLOSE_EDITOR = "CLOSE_EDITOR",
}

export interface IAddNote {
  type: NoteActionTypes.ADD;
  payload: INote;
}

export interface IOpenNoteEditor {
  type: NoteActionTypes.OPEN_EDITOR;
  // if no note given, it means "new note"
  payload: number | null;
}

export interface ICloseNoteEditor {
  type: NoteActionTypes.CLOSE_EDITOR;
}

export type NoteAction = IAddNote | IOpenNoteEditor | ICloseNoteEditor;

export const openEditor = (noteId: number | null): NoteAction => ({
  type: NoteActionTypes.OPEN_EDITOR,
  payload: noteId,
});

export const closeEditor = (): NoteAction => ({
  type: NoteActionTypes.CLOSE_EDITOR,
});
