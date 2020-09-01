export interface INote {
  id: number;
  title: string;
  content: string;
}

export interface INoteState {
  notes: Array<INote>;
  editorOpen: boolean;
  currentNoteId: number | null;
}
