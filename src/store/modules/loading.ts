import { Commit } from 'vuex';

interface State {
  loading: boolean;
}

const state = {
  loading: false,
};

const getters = {
  isloading: (state: State): boolean => {
    return state.loading;
  },
};

const actions = {
  change: ({ commit }: { commit: Commit }, value: boolean): boolean => {
    commit('SET_LOADING', value);
    return value;
  },
};

const mutations = {
  SET_LOADING: (state: State, value: boolean): void => {
    state.loading = value;
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
