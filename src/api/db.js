const notes = [
  { id: 1, title: 'Test note 1', body: 'Oh god NOTE 1' },
  { id: 2, title: 'Test note 2', body: 'Oh god NOTE 2' },
  { id: 3, title: 'Test note 3', body: 'Oh god NOTE 3' }
];

export default {
  // callback, srsly?
  getNotes(callback) {
    callback(notes);
  }
};