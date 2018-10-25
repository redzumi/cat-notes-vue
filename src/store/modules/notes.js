import db from '../../api/db';

// initial state
const state = {
  list: [],
  currentNote: null
};

// getters
const getters = {
  currentNote: state => {
    return state.currentNote;
  }
};

// why commit???
const actions = {
  addNote({ commit }, note) {
    commit('addNote', note);
  },
  getNotes({ commit }) {
    db.getNotes(notes => {
      commit('setNotes', notes);
    });
  },
  showNote({ commit }, note) {
    commit('showNote', note);
  }
};

const mutations = {
  addNote(state, note) {
    state.list.push(note);
  },
  setNotes(state, notes) {
    state.list = notes;
  },
  showNote(state, note) {
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
