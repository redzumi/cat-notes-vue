import db from '../../api/db';

// initial state
const state = {
  list: []
};

// getters
const getters = {};

// why commit???
const actions = {
  addNote({ commit }, note) {
    commit('addNote', note);
  },
  getNotes({ commit }) {
    db.getNotes(notes => {
      commit('setNotes', notes);
    });
  }
};

const mutations = {
  addNote(state, note) {
    state.list.push(note);
  },
  setNotes(state, notes) {
    state.list = notes;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
