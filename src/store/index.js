import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    targetSubreddit: 'photoshopbattles',
    loading: true,
  },
  getters: {},
  mutations: {
    UPDATE_POSTS(state, payload) {
      state.posts = payload;
    },
    CHANGE_LOADING_STATE(state, payload) {
      state.loading = payload;
    },
    CHANGE_TARGET_SUBREDDIT(state, payload) {
      state.targetSubreddit = payload;
    },
  },
  actions: {
    INITIAL_POST_FETCH({ commit }) {
      const URL = 'https://www.reddit.com/r/photoshopbattles/new.json?sort=new&limit=100&t=all';
      axios.get(URL).then((res) => {
        commit('UPDATE_POSTS', res.data.data.children);
        commit('CHANGE_LOADING_STATE', false);
      });
    },
    FETCH_POSTS({ commit }) {
      const URL = `https://www.reddit.com/r/${this.state.targetSubreddit}/new.json?sort=new&`;
      axios.get(URL).then((res) => {
        commit('UPDATE_POSTS', res.data.data.children);
        commit('CHANGE_LOADING_STATE', false);
      });
    },
  },
  modules: {},
});
