import db from '../../api/db';

// initial state
const state = {
  list: []
};

// getters
const getters = {};

// why commit???
const actions = {
  getNotes({ commit }) {
    db.getNotes(notes => {
      commit('setNotes', notes);
    });
  }
};

const mutations = {
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
