export type Note = {
  id: number;
  title: string;
  body: string;
  date?: string;
};

export type Notes = Array<Note>;
