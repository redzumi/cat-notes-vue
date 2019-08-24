import { db } from '../../api/db';
import { Note, Notes } from '../../types/Note';

type State = {
  all: Notes;
  current: Note | null;
};

const state: State = {
  all: [],
  current: null
};

const getters = {
  current: (state: State) => {
    return state.current;
  }
};

// TODO: WARNING разобраться с типами для action
const actions = {
  addNote(action: any, note: Note) {
    const { commit } = action;
    db.addNote(note, (note: Note) => {
      commit('addNote', note);
    });
  },
  getNotes(action: any) {
    const { commit } = action;
    db.getNotes((notes: Array<Note>) => {
      commit('setNotes', notes);
    });
  },
  showNote(action: any, note: Note) {
    const { commit } = action;
    commit('showNote', note);
  }
};

const mutations = {
  addNote(state: State, note: Note) {
    state.all.push(note);
  },
  setNotes(state: State, notes: Array<Note>) {
    state.all = notes;
  },
  showNote(state: State, note: Note) {
    state.current = note;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
