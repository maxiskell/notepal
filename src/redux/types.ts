export interface INote {
  id: number;
  title: string;
  content: string;
}

export interface INoteState {
  readonly notes: Array<INote>;
}
