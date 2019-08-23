type DB = {
  getNotes: (callback: () => void) => void;
};

type Note = {
  id: number;
  title: string;
  body: string;
};

type Notes = Array<Note>;

const notes: Notes = [
  { id: 1, title: 'Test note 1', body: 'Oh god NOTE 1' },
  { id: 2, title: 'Test note 2', body: 'Oh god NOTE 2' },
  { id: 3, title: 'Test note 3', body: 'Oh god NOTE 3' }
];

export const db: DB = {
  // callback, srsly?
  getNotes(callback: (notes: Array<Note>) => void) {
    callback(notes);
  }
};
