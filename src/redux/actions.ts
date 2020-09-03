import { INote } from "./types";

export enum NoteActionTypes {
  ADD = "ADD_NOTE",
  UPDATE = "UPDATE",
  OPEN_EDITOR = "OPEN_EDITOR",
  CLOSE_EDITOR = "CLOSE_EDITOR",
}

export interface IAddNote {
  type: NoteActionTypes.ADD;
  payload: INote;
}

export interface IUpdateNote {
  type: NoteActionTypes.UPDATE;
  payload: INote;
}

export interface IOpenNoteEditor {
  type: NoteActionTypes.OPEN_EDITOR;
  // if no note given, it means "new note"
  payload: string | null;
}

export interface ICloseNoteEditor {
  type: NoteActionTypes.CLOSE_EDITOR;
}

export type NoteAction =
  | IAddNote
  | IUpdateNote
  | IOpenNoteEditor
  | ICloseNoteEditor;

export const openEditor = (noteId: string | null): NoteAction => ({
  type: NoteActionTypes.OPEN_EDITOR,
  payload: noteId,
});

export const closeEditor = (): NoteAction => ({
  type: NoteActionTypes.CLOSE_EDITOR,
});

export const addNote = (note: INote): NoteAction => ({
  type: NoteActionTypes.ADD,
  payload: note,
});

export const updateNote = (note: INote): NoteAction => ({
  type: NoteActionTypes.UPDATE,
  payload: note,
});
