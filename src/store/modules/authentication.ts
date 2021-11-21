import { Commit } from 'vuex';
import AuthService from '@/services/authService';

interface State {
  authenticated: boolean;
  accessToken: string;
}

interface User {
  username: string;
  password: string;
}

const state: State = {
  authenticated: false,
  accessToken: localStorage.getItem('accessToken') || '',
};

const getters = {
  token: (state: State): string => {
    return state.accessToken;
  },
  isauthenticated: (state: State): boolean => {
    return state.authenticated;
  },
};

const actions = {
  // eslint-disable-next-line
  login: ({ commit }: { commit: Commit }, credentials: User): Promise<any> => {
    commit('CLEAN_LOCAL_STORAGE');
    commit('SET_AUTH_STATUS', false);
    return new Promise((resolve, reject) => {
      AuthService.login(credentials.username, credentials.password)
        .then((response) => {
          commit('SET_ACCESS_TOKEN', response.data.access_token);
          commit('SET_AUTH_STATUS', true);
          resolve({
            data: {
              status: 'ok',
              response: response.data,
            },
          });
        })
        .catch((err) => reject(err));
    });
  },
  // eslint-disable-next-line
  logout: ({ commit }: { commit: Commit }): Promise<any> => {
    return new Promise((resolve) => {
      commit('CLEAN_LOCAL_STORAGE');
      commit('SET_AUTH_STATUS', false);
      resolve({
        data: {
          status: 'ok',
        },
      });
    });
  },
  // eslint-disable-next-line
  validate: ({ commit }: { commit: Commit }, token: string): Promise<any> => {
    commit('SET_AUTH_STATUS', false);
    return new Promise((resolve, reject) => {
      if (token) {
        AuthService.validate(token)
          .then((response) => {
            console.log('token validated');
            commit('SET_AUTH_STATUS', true);
            resolve({
              data: {
                status: 'ok',
                response: response.data,
              },
            });
          })
          .catch((err) => reject(err));
      } else {
        reject({
          data: {
            status: 'error',
            response: {
              message: 'No token',
            },
          },
        });
      }
    });
  },
};

const mutations = {
  SET_ACCESS_TOKEN: (state: State, token: string): void => {
    state.accessToken = token;
    localStorage.setItem('accessToken', token);
  },
  SET_AUTH_STATUS: (state: State, status: boolean): void => {
    state.authenticated = status;
  },
  CLEAN_LOCAL_STORAGE: (state: State): void => {
    state.accessToken = '';
    localStorage.removeItem('accessToken');
  },
};

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
};
