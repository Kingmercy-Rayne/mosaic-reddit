import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    editorsPick: [
      'computer graphics',
      'exposure porn',
      'i took a picture',
      'photoshop battles',
      'pics',
      'post processing',
    ],
    sortBy: 'new',
    timeframe: 'all',
    isLoading: true,
    targetSubreddit: 'pics',
    lastVisitedSubreddit: '',
    isSubredditValid: '',
  },
  getters: {},
  mutations: {
    INIT_POSTS(state, payload) {
      state.posts = payload;
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
    UPDATE_LAST_VISITED_SUBREDDIT(state, payload) {
      state.lastVisitedSubreddit = payload;
    },
    CHANGE_SORTING_ORDER(state, payload) {
      state.sortBy = payload;
    },
  },
  actions: {
    INITIAL_POST_FETCH({ commit }) {
      // Network request on Page load
      // on init, get list of all subreddits and search through them before consequent requests
      const URL = `https://www.reddit.com/r/${this.state.targetSubreddit}/${this.state.sortBy}.json?sort=new&limit=100&t=${this.state.timeframe}`;
      axios.get(URL).then((res) => {
        commit('UPDATE_LAST_VISITED_SUBREDDIT', this.state.targetSubreddit);
        commit('CHANGE_TARGET_SUBREDDIT', '');
        commit('INIT_POSTS', res.data.data.children);
        commit('CHANGE_LOADING_STATE', false);
      });
    },

    FETCH_POSTS({ commit }) {
      // const URL = 'https://www.reddit.com/r/photoshopbattles/new.json?sort=new&limit=100&t=all';
      // initial URL for request is sourced from the input TargetSubreddit
      //  .. sort through list and delete entries without image..
      // .. if list < x no. of entries, display "insufficient bunny"
      let URL = `https://www.reddit.com/r/${this.state.targetSubreddit}/${this.state.sortBy}.json?sort=new&limit=100&t=${this.state.timeframe}`;

      if (this.state.targetSubreddit === '') {
        // TODO: refactor code to check for available subreddits rather than empty string.
        // if input is left blank before submission,
        // revert target and last - visited subreddits to previous request with value.
        URL = `https://www.reddit.com/r/${this.state.lastVisitedSubreddit}/${this.state.sortBy}.json?sort=new&limit=100&t=${this.state.timeframe}`;
        commit('CHANGE_TARGET_SUBREDDIT', this.state.lastVisitedSubreddit);
      }
      commit('CHANGE_LOADING_STATE', true);
      axios.get(URL).then((res) => {
        commit('INIT_POSTS', res.data.data.children);
        commit('UPDATE_LAST_VISITED_SUBREDDIT', this.state.targetSubreddit);
        commit('CHANGE_LOADING_STATE', false);
      });
    },
  },
  modules: {},
});
