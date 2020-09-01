import { INote } from "./types";

export enum NoteActionTypes {
  ADD = "ADD_NOTE",
}

export interface IAddNote {
  type: NoteActionTypes.ADD;
  payload: INote;
}

export type NoteActions = IAddNote;
