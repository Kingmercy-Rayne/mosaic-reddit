import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    targetSubreddit: 'photoshopbattles',
    sortBy: 'new',
    timeframe: 'all',
    isLoading: true,
  },
  getters: {},
  mutations: {
    INIT_POSTS(state, payload) {
      state.posts = payload;
    },
    SET_BLANK_POST_LIST(state) {
      state.posts = '';
    },
    ADD_MORE_POSTS(state, payload) {
      state.posts.append(payload);
    },
    CHANGE_LOADING_STATE(state, payload) {
      state.isLoading = payload;
    },
    CHANGE_TARGET_SUBREDDIT(state, payload) {
      // The subreddit to be used in the Network call
      state.targetSubreddit = payload;
    },
    CHANGE_SORTING_ORDER(state, payload) {
      state.sortBy = payload;
    },
  },
  actions: {
    INITIAL_POST_FETCH({ commit }) {
      // Network request on Page load
      const URL = `https://www.reddit.com/r/${this.state.targetSubreddit}/${this.state.sortBy}.json?sort=new&limit=100&t=${this.state.timeframe}`;
      axios.get(URL).then((res) => {
        commit('INIT_POSTS', res.data.data.children);
        // commit('CHANGE_TARGET_SUBREDDIT', '');
        commit('CHANGE_LOADING_STATE', false);
      });
    },
    FETCH_POSTS({ commit }) {
      // const URL = 'https://www.reddit.com/r/photoshopbattles/new.json?sort=new&limit=100&t=all';
      const URL = `https://www.reddit.com/r/${this.state.targetSubreddit}/${this.state.sortBy}.json?sort=new&limit=100&t=${this.state.timeframe}`;
      commit('CHANGE_LOADING_STATE', true);
      axios.get(URL).then((res) => {
        commit('INIT_POSTS', res.data.data.children);
        commit('CHANGE_LOADING_STATE', false);
      });
    },
  },
  modules: {},
});
