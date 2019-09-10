import { db } from '../../api/db';

import { ActionTree, ActionContext, GetterTree, MutationTree } from 'vuex';

import { Note, Notes } from '../../types/Note';
import { RootState } from '../types';

export type State = {
  all: Notes;
  current: Note | null;
};

const state: State = {
  all: [],
  current: null
};

const getters: GetterTree<State, RootState> = {
  current: (state: State) => {
    return state.current;
  }
};

const actions: ActionTree<State, RootState> = {
  addNote(action: ActionContext<State, RootState>, note: Note) {
    const { commit } = action;
    db.addNote(note, (note: Note) => {
      commit('addNote', note);
    });
  },
  getNotes(action: ActionContext<State, RootState>) {
    const { commit } = action;
    db.getNotes((notes: Array<Note>) => {
      commit('setNotes', notes);
    });
  },
  showNote(action: ActionContext<State, RootState>, note: Note) {
    const { commit } = action;
    commit('showNote', note);
  }
};

const mutations: MutationTree<State> = {
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
