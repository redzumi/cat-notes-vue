import { Note, Notes } from '../types/Note';

const notes: Notes = [
  { id: 1, title: 'Test note 1', body: 'Oh god NOTE 1' },
  { id: 2, title: 'Test note 2', body: 'Oh god NOTE 2' },
  { id: 3, title: 'Test note 3', body: 'Oh god NOTE 3' }
];

const getNotes = (callback: (notes: Notes) => void) => {
  callback(notes);
  console.log('Notes got');
};

const addNote = (note: Note, callback: (note: Note) => void) => {
  callback(note);
  console.log('Note added');
};

const removeNote = (note: Note, callback: (note: Note) => void) => {
  callback(note);
  console.log('Note removed');
};

export const db = {
  getNotes,
  addNote,
  removeNote
};
