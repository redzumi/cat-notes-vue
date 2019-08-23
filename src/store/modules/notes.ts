// @ts-ignore
import { db } from '../../api/db';
import Note from '../../components/notes/Note';

type State = {
  list: Array<Note>;
  currentNote: Note;
};

// initial state
const state = {
  list: [],
  currentNote: null
};

// getters
const getters = {
  currentNote: (state: State) => {
    return state.currentNote;
  }
};

// why commit???
const actions = {
  // @ts-ignore
  addNote({ commit }, note: Note) {
    commit('addNote', note);
  },
  // @ts-ignore
  getNotes({ commit }) {
    // @ts-ignore
    db.getNotes((notes: Array<Note>) => {
      commit('setNotes', notes);
    });
  },
  // @ts-ignore
  showNote({ commit }, note: Note) {
    commit('showNote', note);
  }
};

const mutations = {
  addNote(state: State, note: Note) {
    state.list.push(note);
  },
  setNotes(state: State, notes: Array<Note>) {
    state.list = notes;
  },
  showNote(state: State, note: Note) {
    state.currentNote = note;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
