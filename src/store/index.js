import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: true,
  },
  getters: {},
  mutations: {
    updatePosts(state, payload) {
      state.posts = payload;
    },
    changeLoadingState(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      const URL = 'https://www.reddit.com/r/photoshopbattles/new.json?sort=new&limit=100&t=all';
      axios.get(URL).then((res) => {
        console.log(res.data.data);
        commit('updatePosts', res.data.data.children);
        commit('changeLoadingState', false);
      });
    },
  },
  modules: {},
});
