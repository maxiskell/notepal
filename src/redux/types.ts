export interface INote {
  title: string;
  content: string;
}

export interface INoteState {
  notes: Map<string, INote>;
  editorOpen: boolean;
  currentNoteId: string | null;
}
